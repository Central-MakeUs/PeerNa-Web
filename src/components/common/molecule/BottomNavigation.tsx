import TabItem from '@components/common/atom/TabItem';
import { TabItemTypes } from '@constants/activities';
import { useActivity } from '@stackflow/react';

export default function BottomNavigation() {
  const activity = useActivity();
  const activities = [
    { icon: 'Home', name: '홈' },
    { icon: 'Peer', name: '동료' },
    { icon: 'Project', name: '프로젝트' },
    { icon: 'Notification', name: '알림' },
    { icon: 'Mypage', name: '마이페이지' },
  ];

  return (
    <div className="fixed left-2/4 translate-x-[-50%] bottom-0 flex flex-row items-center max-w-[600px] w-full h-[64px] md:border-t-1 border-1 rounded-t-xl">
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
  );
}
