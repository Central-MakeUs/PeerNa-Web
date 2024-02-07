import Button from '@components/common/atom/Button';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/images';
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
      <Footer>
        <Button onClick={handleClick}>다음</Button>
      </Footer>
    </Fragment>
  );
}
