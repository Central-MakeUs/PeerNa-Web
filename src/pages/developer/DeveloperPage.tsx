import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import useModal from '@hooks/store/useModal';
import { Button } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';

const DeveloperPage: ActivityComponentType = () => {
  const { openModal } = useModal();
  return (
    <AppScreenContainer>
      <div className="min-h-screen">
        <Button onClick={() => openModal('login')}>로그인</Button>
      </div>
      <Button className="absolute bottom-10">test button</Button>
    </AppScreenContainer>
  );
};

export default DeveloperPage;
