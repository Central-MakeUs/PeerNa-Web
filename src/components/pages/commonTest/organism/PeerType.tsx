import SlideBox from '@components/animate/SlideBox';
import Picker from '@components/common/atom/Picker';
import SvgIcon from '@components/common/atom/SvgIcon';
import useCommonTestState from '@hooks/useCommonTestState';
import { PeerTypes } from '@store/commonTest';

interface PeerTypeProps {
  answerStep: number;
  handleClick: (type: PeerTypes) => void;
}

export default function PeerType({ answerStep, handleClick }: PeerTypeProps) {
  const { handleChangePeerType } = useCommonTestState();
  return (
    <SlideBox trigger={answerStep}>
      <div className="flex flex-col justify-center items-center gap-3 ">
        <div className="w-[350px]">
          <Picker size="sm" onClick={() => handleChangePeerType('Excellent')}>
            <SvgIcon id="RibbonStar" color="primary" />
            같이 일 할 맛 나는 최고의 동료에요!
          </Picker>
        </div>
        <div className="w-[350px]">
          <Picker size="sm" onClick={() => handleChangePeerType('Great')}>
            <SvgIcon id="HeartPulse" color="primary" />꼭 다시 함께 하고 싶은
            동료에요!
          </Picker>
        </div>
        <div className="w-[350px]">
          <Picker size="sm" onClick={() => handleClick('Good')}>
            <SvgIcon id="LightBulb" color="primary" />
            좋은 점이 많은 동료에요
          </Picker>
        </div>
        <div className="w-[350px]">
          <Picker size="sm" onClick={() => handleClick('Fair')}>
            <SvgIcon id="ThumbLikeDisLike" color="primary" />
            좋은 점도 있고 아쉬운 점도 있는 동료에요
          </Picker>
        </div>
        <div className="w-[350px]">
          <Picker size="sm" onClick={() => handleClick('Poor')}>
            <SvgIcon id="CommentError" color="primary" />
            아쉬운 점이 많은 동료에요
          </Picker>
        </div>
        <div className="w-[350px]">
          <Picker size="sm" onClick={() => handleClick('Bad')}>
            <SvgIcon id="PersonDelete" color="primary" />더 이상 함께 하고 싶지
            않은 동료에요
          </Picker>
        </div>
      </div>
    </SlideBox>
  );
}
