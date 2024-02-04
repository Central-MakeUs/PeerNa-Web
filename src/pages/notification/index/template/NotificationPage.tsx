import BottomNavigation from '@components/common/molecule/BottomNavigation';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { Tab } from '@nextui-org/react';
import ProjectNotificationTab from '@pages/notification/index/organism/ProjectNotificationTab';
import ReviewNotificationTab from '@pages/notification/index/organism/ReviewNotificationTab';
import { ActivityComponentType } from '@stackflow/react';

const NotificationPage: ActivityComponentType = () => {
  return (
    <AppScreenContainer>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '알림',
        }}
      />
      <UnderlineTabs>
        <Tab className="w-full" title="피어 테스트">
          <ReviewNotificationTab />
        </Tab>
        <Tab className="w-full" title="프로젝트">
          <ProjectNotificationTab />
        </Tab>
      </UnderlineTabs>
      <BottomNavigation />
    </AppScreenContainer>
  );
};

export default NotificationPage;
