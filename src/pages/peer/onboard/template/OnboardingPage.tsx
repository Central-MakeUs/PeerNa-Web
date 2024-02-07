import Button from '@components/common/atom/Button';
import Progress from '@components/common/atom/Progress';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { ON_BOARDING_HEADER_TEXT } from '@constants/onBoard';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import useReviewState from '@hooks/store/useReviewState';
import OnboardingCard from '@pages/peer/onboard/organism/OnboardingCard';
import { ActivityComponentType } from '@stackflow/react';
import { getAccessToken, getRefreshToken } from '@utils/token';
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
    if (getAccessToken() || getRefreshToken()) {
      push('HomePage', {});
    }
  }, []);

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
      <Header>
        <Header.TopBar>
          {isShowBackIcon && (
            <Header.BackIcon handleClick={handleClickBackIcon} />
          )}
          {isShowRightButton && (
            <Header.RightButton
              text="바로시작하기"
              handleClick={handleClickStart}
            />
          )}
        </Header.TopBar>
      </Header>
      <Progress curStep={curStep} lastStep={4} />
      <OnboardingCard step={curStep} />
      <Footer bottom={3}>
        <Button className="px-2" onClick={handleClickPush}>
          {buttonText}
        </Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default OnboardingPage;
