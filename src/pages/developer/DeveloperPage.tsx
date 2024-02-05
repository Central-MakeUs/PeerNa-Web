import LoadingFallback from '@components/common/molecule/LoadingFallback';
import Modals from '@components/common/molecule/Modal';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import Test from '@components/wrapper/Test';
import useModal from '@hooks/store/useModal';
import { Button } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';

const DeveloperPage: ActivityComponentType = () => {
  const { openModal } = useModal('login');
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
        <ErrorBoundaryWithSuspense onReset={() => console.log('reset')}>
          <Test />
        </ErrorBoundaryWithSuspense>
        <LoadingFallback />
        <div className="min-h-screen">
          <Button onClick={() => openModal()}>로그인</Button>
        </div>
        <div className="min-h-screen">
          <Button onClick={() => openModal()}>로그인</Button>
        </div>
        <div>hello</div>
      </Content>
      <Footer bottom={1}>
        <Button>test button</Button>
      </Footer>
      <Modals />
    </AppScreenContainer>
  );
};

export default DeveloperPage;
