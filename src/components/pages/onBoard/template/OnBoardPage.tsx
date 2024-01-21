import Progress from '@components/common/atom/Progress';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import OnBoardCard from '@components/pages/onBoard/organism/OnBoardCard';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { OnboardStep } from '@constants/onboard';
import { useFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';

type OnBoardPageParams = {
  step: string;
};

const OnBoardPage: ActivityComponentType<OnBoardPageParams> = ({ params }) => {
  const { push, pop } = useFlow();
  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = OnboardStep.length;

  const handleClickStepPush = () => {
    if (curStep === lastStep) {
      push('ReviewSelfPage', { step: '1' });
      localStorage.setItem('OnBoard', 'true');
      return;
    }
    push('OnBoardPage', { step: nextStep });
  };

  const handleClickBackIcon = () => pop();
  const handleClickStart = () => push('ReviewSelfPage', { step: '1' });

  return (
    <AppScreenContainer>
      <NavigationHeader
        backIconProps={{
          isShow: true,
          handleClick: handleClickBackIcon,
        }}
        rightButtonProps={{
          isShow: true,
          text: '바로시작하기',
          handleClick: handleClickStart,
        }}
      />
      <Progress curStep={curStep} lastStep={4} />
      <OnBoardCard step={curStep - 1} />

      <FixedBottomButton handleClick={handleClickStepPush}>
        <Typography variant="body02" fontColor="white">
          {curStep === lastStep ? '시작하기' : '다음'}
        </Typography>
      </FixedBottomButton>
    </AppScreenContainer>
  );
};

export default OnBoardPage;
