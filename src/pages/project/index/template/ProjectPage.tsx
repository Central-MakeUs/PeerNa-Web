import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { Spacer, Tab } from '@nextui-org/react';
import MyProject from '@pages/project/index/organism/MyProject';
import RecentProjectTab from '@pages/project/index/organism/RecentProjectTab';
import { ActivityComponentType } from '@stackflow/react';

const ProjectPage: ActivityComponentType = () => {
  return (
    <AppScreenContainer>
      <Header>
        <Spacer y={10} />
        <Header.Body>
          <Typography variant="header01" fontColor="gray08">
            프로젝트
          </Typography>
        </Header.Body>
      </Header>
      <Spacer y={4} />
      <Content>
        <UnderlineTabs>
          <Tab className="w-full h-full px-4" title="최신순">
            <ErrorBoundaryWithSuspense>
              <RecentProjectTab />
            </ErrorBoundaryWithSuspense>
          </Tab>
          <Tab className="w-full px-4" title="내 프로젝트">
            <ErrorBoundaryWithSuspense>
              <MyProject />
            </ErrorBoundaryWithSuspense>
          </Tab>
        </UnderlineTabs>
        <Spacer y={10} />
      </Content>
      <Footer>
        <BottomNavigation />
      </Footer>
    </AppScreenContainer>
  );
};

export default ProjectPage;
