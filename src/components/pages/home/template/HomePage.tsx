import BottomNavigation from '@components/common/molecule/BottomNavigation';
import { ActivityComponentType } from '@stackflow/react';

const HomePage: ActivityComponentType = () => {
  return (
    <div>
      <div className="h-full">HomePage</div>
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
