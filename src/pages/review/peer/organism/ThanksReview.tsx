import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewState from '@hooks/store/useReviewState';
import { Fragment } from 'react';

export default function ThanksReview() {
  const { review } = useReviewState();
  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '8' });
  return (
    <Fragment>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '소중한 응답 감사해요!',
          subtitle: `${review.peerName}님도 매우 고마워할 거에요!`,
        }}
      />
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="CheckboxPerson" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <Footer>
        <Button onClick={handleClick}>확인</Button>
      </Footer>
    </Fragment>
  );
}
