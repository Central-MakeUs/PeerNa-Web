import BottomNavigation from '@components/common/molecule/BottomNavigation';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { Tab } from '@nextui-org/react';
import MyProject from '@pages/project/index/organism/MyProject';
import RecentProjectTab from '@pages/project/index/organism/RecentProjectTab';
import { ActivityComponentType } from '@stackflow/react';

const ProjectPage: ActivityComponentType = () => {
  return (
    <AppScreenContainer>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '프로젝트',
        }}
      />
      <UnderlineTabs>
        <Tab className="w-full" title="최신순">
          <RecentProjectTab />
        </Tab>
        <Tab className="w-full" title="내 프로젝트">
          <MyProject />
        </Tab>
      </UnderlineTabs>
      <BottomNavigation />
    </AppScreenContainer>
  );
};

export default ProjectPage;