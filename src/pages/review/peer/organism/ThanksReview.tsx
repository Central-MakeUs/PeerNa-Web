import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { UtilityKeys } from '@constants/localStorage';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewState from '@hooks/store/useReviewState';
import { Fragment, useEffect } from 'react';

export default function ThanksReview() {
  const { review } = useReviewState();
  const { push } = useFlow();
  const handleClick = () => {
    if (localStorage.getItem(UtilityKeys.IS_ONBOARD) === 'true')
      push('HomePage', {});
    else push('ReviewPeerPage', { step: '8' });
  };

  const { handleClearReviews } = useReviewState();
  useEffect(() => {
    return () => handleClearReviews();
  }, []);

  return (
    <Fragment>
      <Header>
        <Header.TopBar />
        <Header.Body className="gap-4">
          <Header.Title>소중한 응답 감사해요!</Header.Title>
          <Header.Subtitle>
            {`${review.peerName}님도 매우 고마워할 거에요!`}
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="CheckboxPerson" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleClick}>확인</Button>
      </Footer>
    </Fragment>
  );
}
