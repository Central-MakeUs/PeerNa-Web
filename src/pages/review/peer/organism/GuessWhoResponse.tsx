import Button from '@components/common/atom/Button';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/images';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

export default function GuessWhoResponse() {
  const { push } = useFlow();

  const handleClick = () => push('ReviewPage', { type: 'peer', step: '1' });
  return (
    <Fragment>
      <Header>
        <Header.TopBar />
        <Header.Body className="gap-4">
          <Header.Title>내가 응답한 것인 줄 알면 어떡하지?</Header.Title>
          <Header.Subtitle>
            {`최소 3개의 응답이 모였을 때부터 평균 값을\n분석하여 00님께 결과를 제공해요.`}
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <FixedCenter>
        <img
          src={PEER_REVIEW_IMAGE_LIST[2]}
          className="max-w-md"
          alt="3개 이상 리뷰가 있어야 볼 수 있어요."
        />
      </FixedCenter>
      <Footer bottom={3} className="px-4">
        <Button onClick={handleClick}>다음</Button>
      </Footer>
    </Fragment>
  );
}
