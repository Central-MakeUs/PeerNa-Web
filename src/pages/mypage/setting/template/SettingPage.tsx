import { queryClient } from '@/main';
import Button from '@components/common/atom/Button';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import usePostLogout from '@hooks/api/member/index/usePostLogout';
import { useFlow } from '@hooks/common/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';
import { http } from '@utils/API';
import { getFcmToken, getRefreshToken } from '@utils/token';
import toast from 'react-hot-toast';
import SettingMenu from '../molecule/SettingMenu';

const SettingPage: ActivityComponentType = () => {
  const { replace } = useFlow();
  const refreshToken = getRefreshToken();
  const fcmToken = getFcmToken() ?? '';
  const { pop } = useFlow();
  const handleClick = () => pop();
  const { mutate: logoutMutate } = usePostLogout();

  const handleLogout = () => {
    if (refreshToken)
      logoutMutate(
        { refreshToken: refreshToken, fcmToken: fcmToken },
        {
          onSuccess: () => {
            toast.success('로그아웃 되었습니다');
            delete http.defaults.headers.common.Authorization;
            localStorage.clear();
            queryClient.clear();
            replace('OnboardingPage', { step: '1' });
          },
        },
      );
  };

  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleClick} />
          <Header.Title className="mx-auto">설정</Header.Title>
          <Header.RightButton text="" handleClick={() => null} />
        </Header.TopBar>
      </Header>
      <SettingMenu />
      <Footer bottom={5}>
        <Button buttonVariant="naked" onClick={handleLogout}>
          로그아웃
        </Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default SettingPage;
