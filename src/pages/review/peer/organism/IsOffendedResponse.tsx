import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/images';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { Fragment } from 'react';

export default function IsOffendedResponse() {
  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '6' });
  return (
    <Fragment>
      <Header>
        <Spacer y={10} />
        <Header.Body className="gap-1">
          <Typography variant="header01" color="gray08">
            내 응답에 기분 나빠하진 않을까?
          </Typography>
          <Typography variant="body02" color="gray06">
            {`피어 테스트는 긍정과 부정으로 나뉘지 않는\n문항들로 구성되어 있어요.`}
          </Typography>
        </Header.Body>
      </Header>
      <Content>
        <div className="w-full h-[calc(100%-180px)] flex items-center justify-center">
          <div className="max-w-[400px] max-h-[400px]">
            <img
              src={PEER_REVIEW_IMAGE_LIST[1]}
              className="w-full h-full aspect-square"
              alt="피어 테스트는 긍정과 부정으로 나뉘지 않는 문항들로 구성되어 있어요."
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
