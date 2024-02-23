import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewState from '@hooks/store/useReviewState';
import FlipCard from '@pages/review/result/molecule/FlipCard';
import { TestType } from '@type/enums';
import { Fragment } from 'react';

export default function WonderingMyCard() {
  const { push } = useFlow();
  const { handleClearReviews } = useReviewState();
  const handleClick = () => {
    handleClearReviews();
    push('OnboardingPage', { step: '1' });
  };
  const handleClickRightButton = () => push('HomePage', {});

  return (
    <Fragment>
      <Header>
        <Header.TopBar>
          <Header.RightButton
            text="홈으로 가기"
            handleClick={handleClickRightButton}
          />
        </Header.TopBar>
        <Header.Body className="text-center gap-4">
          <Header.Title>{`내 피어 카드와 유형도\n궁금하다면?`}</Header.Title>
        </Header.Body>
      </Header>
      <Content>
        <div className="py-6 flex flex-col items-center justify-center gap-3">
          <FlipCard
            selfTestType={TestType.UNKNOWN}
            peerTestType={TestType.UNKNOWN}
            size="L"
          />
        </div>
      </Content>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleClick}>
          <Typography variant="body02" fontColor="white">
            셀프 테스트 시작하기
          </Typography>
        </Button>
      </Footer>
    </Fragment>
  );
}
