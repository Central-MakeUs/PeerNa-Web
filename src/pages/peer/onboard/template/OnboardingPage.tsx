import Progress from '@components/common/atom/Progress';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { ON_BOARDING_HEADER_TEXT } from '@constants/onboard';
import useReviewSelfState from '@hooks/useReviewSelfState';
import useReviewState from '@hooks/useReviewState';
import { useFlow } from '@hooks/useStackFlow';
import OnboardingCard from '@pages/peer/onboard/organism/OnboardingCard';
import { ActivityComponentType } from '@stackflow/react';
import { useEffect } from 'react';

type OnboardingPageParams = {
  step: string;
};

const OnboardingPage: ActivityComponentType<OnboardingPageParams> = ({
  params,
}) => {
  const { handleClear } = useReviewSelfState();
  const { handleClearReviews } = useReviewState();
  useEffect(() => {
    handleClear();
    handleClearReviews();
  });

  const { push, pop } = useFlow();
  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = ON_BOARDING_HEADER_TEXT.length;

  const handleClickPush = () => {
    if (curStep === lastStep) {
      push('ReviewSelfPage', { step: '0' });
      localStorage.setItem('OnBoard', 'true');
      return;
    }
    push('OnboardingPage', { step: nextStep });
  };

  const isShowBackIcon = curStep !== 1;
  const isShowRightButton = curStep !== 4;

  const handleClickBackIcon = () => pop();
  const handleClickStart = () => push('ReviewSelfPage', { step: '0' });

  const buttonText = curStep === lastStep ? '시작하기' : '다음';
  return (
    <AppScreenContainer>
      <NavigationHeader
        backIconProps={{
          isShow: isShowBackIcon,
          handleClick: handleClickBackIcon,
        }}
        rightButtonProps={{
          isShow: isShowRightButton,
          text: '바로시작하기',
          handleClick: handleClickStart,
        }}
      />
      <Progress curStep={curStep} lastStep={4} />
      <OnboardingCard step={curStep} />

      <FixedBottomButton handleClick={handleClickPush}>
        <Typography variant="body02" fontColor="white">
          {buttonText}
        </Typography>
      </FixedBottomButton>
    </AppScreenContainer>
  );
};

export default OnboardingPage;
