import Button from '@components/common/atom/Button';
import Progress from '@components/common/atom/Progress';
import Typography from '@components/common/atom/Typography';
import OnBoardCard from '@components/pages/onboard/organism/OnBoardCard';
import { OnboardStep } from '@constants/onboard';
import { useFlow } from '@hooks/useStackFlow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

type OnboardParams = {
  step: string;
};

const OnBoard: ActivityComponentType<OnboardParams> = ({ params }) => {
  const { push, replace } = useFlow();
  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = OnboardStep.length;

  const handleClickStepPush = () => {
    if (curStep === lastStep) {
      replace('HomePage', {}, { animate: true });
      localStorage.setItem('OnBoard', 'true');
      return;
    }
    push('OnBoard', { step: nextStep });
  };

  return (
    <AppScreen>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="box-border w-full h-[68px] px-2 py-[18px] flex justify-end bg-transparent">
          <Typography variant="body03" fontColor="gray07">
            바로 시작하기
          </Typography>
        </div>
        <Progress currentStep={curStep} lastStep={4} />
        <OnBoardCard step={curStep - 1} />
      </div>

      <div className="absolute bottom-5 w-full px-5">
        <Button onClick={handleClickStepPush}>다음</Button>
      </div>
    </AppScreen>
  );
};

export default OnBoard;
