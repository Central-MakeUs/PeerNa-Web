import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/images';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { Fragment } from 'react';

export default function IntroPeerReview() {
  const { push } = useFlow();

  const handleClick = () => push('ReviewPeerPage', { step: '5' });

  return (
    <Fragment>
      <Header>
        <Spacer y={10} />
        <Header.Body>
          <Typography variant="header01" color="gray08">
            {'잠깐!\n피어 테스트에 대해 소개할게요'}
          </Typography>
        </Header.Body>
      </Header>
      <Content>
        <div className="w-full h-[calc(100%-180px)] flex items-center justify-center">
          <div className="max-w-[400px] max-h-[400px]">
            <img
              src={PEER_REVIEW_IMAGE_LIST[0]}
              className="w-full h-full aspect-square"
              alt="잠깐! 피어 테스트에 대해 소개할게요"
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
