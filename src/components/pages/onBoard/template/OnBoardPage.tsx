import Button from '@components/common/atom/Button';
import Progress from '@components/common/atom/Progress';
import Typography from '@components/common/atom/Typography';
import OnBoardCard from '@components/pages/onBoard/organism/OnBoardCard';
import { OnboardStep } from '@constants/onboard';
import { useFlow } from '@hooks/useStackFlow';
import { AppScreen, IconBack } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

type OnBoardPageParams = {
  step: string;
};

const OnBoardPage: ActivityComponentType<OnBoardPageParams> = ({ params }) => {
  const { push, replace } = useFlow();
  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = OnboardStep.length;

  const handleClickStepPush = () => {
    if (curStep === lastStep) {
      replace('SelfTestPage', { step: '1' }, { animate: true });
      localStorage.setItem('OnBoard', 'true');
      return;
    }
    push('OnBoard', { step: nextStep });
  };

  return (
    <AppScreen>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="box-border w-full h-[68px] px-2 py-[18px] flex items-center justify-between bg-transparent">
          {curStep !== 1 && curStep !== lastStep ? <IconBack /> : <div />}
          <Typography variant="body03" fontColor="gray07">
            바로 시작하기
          </Typography>
        </div>
        <Progress curStep={curStep} lastStep={4} />
        <OnBoardCard step={curStep - 1} />
      </div>

      <div className="absolute bottom-5 w-full px-5">
        <Button onClick={handleClickStepPush}>
          {curStep === lastStep ? '시작하기' : '다음'}
        </Button>
      </div>
    </AppScreen>
  );
};

export default OnBoardPage;
