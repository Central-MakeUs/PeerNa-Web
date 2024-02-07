import TabItem from '@components/common/atom/TabItem';
import { TabItemTypes } from '@constants/activities';
import { useActivity } from '@stackflow/react';

export default function BottomNavigation() {
  const activity = useActivity();
  const activities = [
    { icon: 'HomePage', name: '홈' },
    { icon: 'ProjectPage', name: '프로젝트' },
    { icon: 'NotificationPage', name: '알림' },
    { icon: 'MyPage', name: '마이페이지' },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-md h-16 bg-white border-t border-gray-300">
      <div className="flex justify-around items-center h-full">
        {activities.map(({ icon, name }) => (
          <TabItem
            key={icon}
            icon={icon as TabItemTypes}
            name={name}
            pathname={activity.name as TabItemTypes}
            isDone={
              activity.transitionState === 'enter-done' ||
              activity.transitionState === 'enter-active'
            }
          />
        ))}
      </div>
    </div>
  );
}
