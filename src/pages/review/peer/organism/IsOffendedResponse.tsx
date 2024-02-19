import Button from '@components/common/atom/Button';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/images';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

export default function IsOffendedResponse() {
  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '6' });
  return (
    <Fragment>
      <Header>
        <Header.TopBar />
        <Header.Body className="gap-4">
          <Header.Title>내 응답에 기분 나빠하진 않을까?</Header.Title>
          <Header.Subtitle>
            {`피어 테스트는 긍정과 부정으로 나뉘지 않는\n문항들로 구성되어 있어요.`}
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <FixedCenter>
        <img
          src={PEER_REVIEW_IMAGE_LIST[1]}
          className="max-w-md"
          alt="피어 테스트는 긍정과 부정으로 나뉘지 않는
          문항들로 구성되어 있어요."
        />
      </FixedCenter>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleClick}>다음</Button>
      </Footer>
    </Fragment>
  );
}
