import SlideBox from '@components/animate/SlideBox';
import Picker from '@components/common/atom/Picker';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { PEER_GRADE_INFO } from '@constants/list';
import { PeerGradeTypes } from '@store/reviewState';
import { PeerGrade } from '@type/enums';

interface PeerTypeProps {
  answerStep: number;
  handleClick: (type: PeerGradeTypes) => void;
}

export default function PeerType({ answerStep, handleClick }: PeerTypeProps) {
  return (
    <SlideBox trigger={answerStep}>
      <div className="flex flex-col justify-center items-center gap-3 mt-[52px]">
        {Object.keys(PEER_GRADE_INFO).map((type, index) => {
          const peerGradeType: PeerGrade = type as PeerGrade;
          const peerGradeInfo = PEER_GRADE_INFO[peerGradeType];
          return (
            <div key={index} className="w-[350px]">
              <Picker size="sm" onClick={() => handleClick(peerGradeType)}>
                <SvgIcon id={peerGradeInfo.icon} color="primary" />
                <Typography variant="body02">{peerGradeInfo.text}</Typography>
              </Picker>
            </div>
          );
        })}
      </div>
    </SlideBox>
  );
}
