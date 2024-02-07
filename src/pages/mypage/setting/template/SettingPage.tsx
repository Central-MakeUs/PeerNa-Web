import Button from '@components/common/atom/Button';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { useFlow } from '@hooks/common/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';
import SettingMenu from '../molecule/SettingMenu';

const SettingPage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const handleClick = () => pop();
  const handleLogout = () => {
    console.log('로그아웃');
  };
  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleClick} />
          <Header.Title className="mx-auto">설정</Header.Title>
        </Header.TopBar>
      </Header>
      <SettingMenu />
      <Footer bottom={3}>
        <Button buttonVariant="naked" onClick={handleLogout}>
          로그아웃
        </Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default SettingPage;
