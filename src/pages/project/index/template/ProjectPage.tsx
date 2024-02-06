import BottomNavigation from '@components/common/molecule/BottomNavigation';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Header from '@components/wrapper/Header';
import { Tab } from '@nextui-org/react';
import MyProject from '@pages/project/index/organism/MyProject';
import RecentProjectTab from '@pages/project/index/organism/RecentProjectTab';
import { ActivityComponentType } from '@stackflow/react';

const ProjectPage: ActivityComponentType = () => {
  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar />
        <Header.Body>
          <Header.Title>프로젝트</Header.Title>
        </Header.Body>
      </Header>

      <UnderlineTabs>
        <Tab className="w-full" title="최신순">
          <ErrorBoundaryWithSuspense>
            <RecentProjectTab />
          </ErrorBoundaryWithSuspense>
        </Tab>
        <Tab className="w-full" title="내 프로젝트">
          <ErrorBoundaryWithSuspense>
            <MyProject />
          </ErrorBoundaryWithSuspense>
        </Tab>
      </UnderlineTabs>
      <BottomNavigation />
    </AppScreenContainer>
  );
};

export default ProjectPage;
