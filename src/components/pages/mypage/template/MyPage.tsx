import Button from '@components/common/atom/Button';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import LoginModal from '@components/pages/login/organism/LoginModal';
import useModal from '@hooks/useModal';
import useToken from '@hooks/useToken';
import { ActivityComponentType } from '@stackflow/react';

const MyPage: ActivityComponentType = () => {
  const { openModal } = useModal();
  const { accessToken } = useToken();

  const handleCheckPeerType = () => {
    if (!accessToken) {
      openModal('login');
    }
  };

  return (
    <div>
      <Button onClick={handleCheckPeerType}>내 피어 유형 확인하기</Button>
      <LoginModal />
      <BottomNavigation />
    </div>
  );
};

export default MyPage;
