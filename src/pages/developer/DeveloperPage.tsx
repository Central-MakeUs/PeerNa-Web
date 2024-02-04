import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useModal from '@hooks/store/useModal';
import { Button } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';

const DeveloperPage: ActivityComponentType = () => {
  const { openModal } = useModal();
  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={() => null} />
        </Header.TopBar>
        <Header.Body>
          <Header.Title>hello</Header.Title>
        </Header.Body>
      </Header>
      <Content>
        <div className="min-h-screen">
          <Button onClick={() => openModal('login')}>로그인</Button>
        </div>
        <div className="min-h-screen">
          <Button onClick={() => openModal('login')}>로그인</Button>
        </div>
        <div>hello</div>
      </Content>
      <Footer bottom={1}>
        <Button>test button</Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default DeveloperPage;
