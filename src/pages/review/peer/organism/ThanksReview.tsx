import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { UtilityKeys } from '@constants/localStorage';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewState from '@hooks/store/useReviewState';
import { Spacer } from '@nextui-org/react';
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
        <Spacer y={10} />
        <Header.Body className="gap-1">
          <Typography variant="header01" color="gray08">
            소중한 응답 감사해요!
          </Typography>
          <Typography variant="body02" color="gray06">
            {`${review.peerName}님도 매우 고마워할 거에요!`}
          </Typography>
        </Header.Body>
      </Header>
      <Content>
        <div className="w-full h-[calc(100%-180px)] flex items-center justify-center">
          <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
            <SvgIcon
              id="CheckboxPerson"
              color="primary"
              width={64}
              height={64}
            />
          </div>
        </div>
      </Content>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleClick}>확인</Button>
      </Footer>
    </Fragment>
  );
}
