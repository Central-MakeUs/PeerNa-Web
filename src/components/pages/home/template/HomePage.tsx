import AppleLogin from '@components/common/atom/AppleLogin';
import Button from '@components/common/atom/Button';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import { MODE } from '@constants/index';
import useModal from '@hooks/useModal';
import { useFlow } from '@hooks/useStackFlow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { bottomSheetState } from '@store/bottomSheet';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const HomePage: ActivityComponentType = () => {
  const setOpen = useSetRecoilState(bottomSheetState);

  const { push } = useFlow();

  useEffect(() => {
    if (MODE === 'production')
      if (localStorage.getItem('OnBoard') === null) {
        push('OnboardingPage', { step: '1' });
      }
  }, []);

  const { openModal } = useModal();

  return (
    <AppScreen>
      <AppleLogin />
      <Button
        onClick={() => {
          localStorage.removeItem('OnBoard');
        }}
      >
        리셋
      </Button>
      <Button
        onClick={() => {
          setOpen(() => ({
            isOpen: true,
            contents: [
              { title: '대학생', onClick: undefined },
              {
                title: '직장인',
                subtitle: '바쁘다 바빠 현대사회',
                onClick: undefined,
              },
            ],
          }));
        }}
      >
        OpenDrawer
      </Button>
      <Button
        onClick={() => push('ReviewResultPage', { type: 'self', step: '1' })}
      >
        go now
      </Button>
      <Button onClick={() => openModal('login')}>로그인</Button>
      <div className="h-full">HomePage</div>
      <BottomNavigation />
    </AppScreen>
  );
};

export default HomePage;
