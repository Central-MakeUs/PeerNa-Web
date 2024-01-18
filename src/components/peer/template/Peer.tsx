import BottomNavigation from '@components/common/molecule/BottomNavigation';
import { ActivityComponentType } from '@stackflow/react';
import Button from '@components/common/atom/Button';
import useModal from '@hooks/useModal';
import useToken from '@hooks/useToken';
import LoginModal from '@components/login/organism/LoginModal';

const Peer: ActivityComponentType = () => {
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

export default Peer;
