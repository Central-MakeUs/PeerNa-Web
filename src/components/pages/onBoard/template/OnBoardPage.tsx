import Progress from '@components/common/atom/Progress';
import Typography from '@components/common/atom/Typography';
import OnBoardCard from '@components/pages/onBoard/organism/OnBoardCard';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { OnboardStep } from '@constants/onboard';
import { useFlow } from '@hooks/useStackFlow';
import { IconBack } from '@stackflow/plugin-basic-ui';
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
      replace('ReviewSelfPage', { step: '1' }, { animate: true });
      localStorage.setItem('OnBoard', 'true');
      return;
    }
    push('OnBoardPage', { step: nextStep });
  };

  const handleClickStart = () => push('ReviewSelfPage', { step: '1' });

  return (
    <AppScreenContainer>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="box-border w-full h-[68px] px-2 py-[18px] flex items-center justify-between bg-transparent">
          {curStep !== 1 && curStep !== lastStep ? <IconBack /> : <div />}
          <button onClick={handleClickStart}>
            <Typography variant="body03" fontColor="gray07">
              바로 시작하기
            </Typography>
          </button>
        </div>
        <Progress curStep={curStep} lastStep={4} />
        <OnBoardCard step={curStep - 1} />
      </div>

      <FixedBottomButton handleClick={handleClickStepPush}>
        <Typography variant="body02" fontColor="white">
          {curStep === lastStep ? '시작하기' : '다음'}
        </Typography>
      </FixedBottomButton>
    </AppScreenContainer>
  );
};

export default OnBoardPage;
