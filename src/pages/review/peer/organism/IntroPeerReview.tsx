import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedCenter from '@components/wrapper/FixedCenter';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/onboard';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

export default function IntroPeerReview() {
  const { push } = useFlow();

  const handleClick = () => push('ReviewPeerPage', { step: '5' });

  return (
    <Fragment>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '잠깐!\n피어 테스트에 대해 소개할게요',
        }}
      />
      <FixedCenter>
        <img
          src={PEER_REVIEW_IMAGE_LIST[0]}
          className="max-w-md"
          alt="잠깐! 피어 테스트에 대해 소개할게요"
        />
      </FixedCenter>
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          다음
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
