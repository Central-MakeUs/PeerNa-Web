import BottomNavigation from '@components/common/molecule/BottomNavigation';
import { ActivityComponentType } from '@stackflow/react';

const Home: ActivityComponentType = () => {
  return (
    <div>
      <div className="h-full">Home</div>
      <BottomNavigation />
    </div>
  );
};

export default Home;
