import SlideBox from '@components/animate/SlideBox';
import Picker from '@components/common/atom/Picker';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { PeerTypeArray, PeerTypeArrayType } from '@constants/peerType';
import { PeerGradeTypes } from '@store/reviewState';

interface PeerTypeProps {
  answerStep: number;
  handleClick: (type: PeerGradeTypes) => void;
}

export default function PeerType({ answerStep, handleClick }: PeerTypeProps) {
  return (
    <SlideBox trigger={answerStep}>
      <div className="flex flex-col justify-center items-center gap-3 mt-[52px]">
        {PeerTypeArray.map(
          ({ type, iconId, title }: PeerTypeArrayType, index) => (
            <div key={index} className="w-[350px]">
              <Picker size="sm" onClick={() => handleClick(type)}>
                <SvgIcon id={iconId} color="primary" />
                <Typography variant="body02">{title}</Typography>
              </Picker>
            </div>
          ),
        )}
      </div>
    </SlideBox>
  );
}
