import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/images';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewState from '@hooks/store/useReviewState';
import { Spacer } from '@nextui-org/react';
import { Fragment } from 'react';

export default function GuessWhoResponse() {
  const { review } = useReviewState();
  const { push } = useFlow();

  const handleClick = () => push('ReviewPage', { type: 'peer', step: '1' });

  return (
    <Fragment>
      <Header>
        <Spacer y={10} />
        <Header.Body className="gap-1">
          <Typography variant="header01" color="gray08">
            내가 응답한 것인 줄 알면 어떡하지?
          </Typography>
          <Typography variant="body02" color="gray06">
            {`최소 3개의 응답이 모였을 때부터 평균 값을\n분석하여 ${review.peerName}님께 결과를 제공해요.`}
          </Typography>
        </Header.Body>
      </Header>
      <Content>
        <div className="w-full h-[calc(100%-180px)] flex items-center justify-center">
          <div className="max-w-[400px] max-h-[400px]">
            <img
              src={PEER_REVIEW_IMAGE_LIST[2]}
              className="w-full h-full aspect-square"
              alt="3개 이상 리뷰가 있어야 볼 수 있어요."
            />
          </div>
        </div>
      </Content>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleClick}>다음</Button>
      </Footer>
    </Fragment>
  );
}
