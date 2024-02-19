import Button from '@components/common/atom/Button';
import Progress from '@components/common/atom/Progress';
import Typography from '@components/common/atom/Typography';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { UtilityKeys } from '@constants/localStorage';
import { ON_BOARDING_HEADER_TEXT } from '@constants/onBoard';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import useReviewState from '@hooks/store/useReviewState';
import OnboardingCard from '@pages/peer/onboard/organism/OnboardingCard';
import { ActivityComponentType } from '@stackflow/react';
import { getAccessToken, getRefreshToken } from '@utils/token';
import { Fragment, useEffect } from 'react';

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
    // 이미 온보딩을 완료한 유저거나 토큰이 있으면 로그인한 유저임.
    if (
      localStorage.getItem(UtilityKeys.IS_ONBOARD) &&
      (getAccessToken() || getRefreshToken())
    ) {
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
      return;
    }
    push('OnboardingPage', { step: nextStep });
  };

  const isShowBackIcon = curStep !== 1;

  const handleClickBackIcon = () => pop();
  const handleClickStart = () => {
    localStorage.setItem(UtilityKeys.IS_ONBOARD, 'true');
    push('HomePage', {});
  };

  const buttonText = curStep === lastStep ? '시작하기' : '다음';
  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          {isShowBackIcon && (
            <Header.BackIcon handleClick={handleClickBackIcon} />
          )}
        </Header.TopBar>
      </Header>
      <Progress curStep={curStep} lastStep={4} />
      <OnboardingCard step={curStep} />
      <Footer bottom={5} className="px-4">
        <div className="w-full flex flex-row justify-center gap-1 mb-4">
          {curStep === 1 && (
            <Fragment>
              <Typography variant="body04" fontColor="gray04">
                이미 계정이 있으신가요?
              </Typography>
              <button onClick={handleClickStart}>
                <Typography
                  variant="body04"
                  fontColor="primary"
                  className="underline underline-offset-2 decoration-[1.5px]"
                >
                  로그인
                </Typography>
              </button>
            </Fragment>
          )}
        </div>
        <Button className="px-2" onClick={handleClickPush}>
          {buttonText}
        </Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default OnboardingPage;
