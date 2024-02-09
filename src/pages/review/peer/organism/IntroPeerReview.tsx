import Button from '@components/common/atom/Button';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/images';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

export default function IntroPeerReview() {
  const { push } = useFlow();

  const handleClick = () => push('ReviewPeerPage', { step: '5' });

  return (
    <Fragment>
      <Header>
        <Header.TopBar></Header.TopBar>
        <Header.Body>
          <Header.Title>{'잠깐!\n피어 테스트에 대해 소개할게요'}</Header.Title>
        </Header.Body>
      </Header>
      <FixedCenter>
        <img
          src={PEER_REVIEW_IMAGE_LIST[0]}
          className="max-w-md"
          alt="잠깐! 피어 테스트에 대해 소개할게요"
        />
      </FixedCenter>
      <Footer bottom={3} className="px-4">
        <Button onClick={handleClick}>다음</Button>
      </Footer>
    </Fragment>
  );
}
