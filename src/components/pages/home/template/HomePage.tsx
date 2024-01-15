import BottomNavigation from '@components/common/molecule/BottomNavigation';
import { useFlow } from '@hooks/useStackFlow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { useEffect } from 'react';

const HomePage: ActivityComponentType = () => {
  const { push } = useFlow();

  useEffect(() => {
    if (localStorage.getItem('OnBoard') === null) {
      push('OnBoard', { step: '1' });
    }
  }, []);

  return (
    <AppScreen>
      <div className="h-full">HomePage</div>
      <BottomNavigation />
    </AppScreen>
  );
};

export default HomePage;
