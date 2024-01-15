import TabItem from '@components/common/atom/TabItem';
import { ActivitiesTypes } from '@constants/activities';
import { useActivity } from '@stackflow/react';

export default function BottomNavigation() {
  const activity = useActivity();
  const activities = [
    { icon: 'HomePage', name: '홈' },
    { icon: 'PeerPage', name: '동료' },
    { icon: 'ProjectPage', name: '프로젝트' },
    { icon: 'NotificationPage', name: '알림' },
    { icon: 'MyPage', name: '마이페이지' },
  ];

  return (
    <div className="fixed left-2/4 translate-x-[-50%] bottom-0 flex flex-row items-center max-w-[600px] w-full h-[64px] border-t-1 border-x-1 rounded-t-xl">
      {activities.map(({ icon, name }) => (
        <TabItem
          key={icon}
          icon={icon as ActivitiesTypes}
          name={name}
          pathname={activity.name as ActivitiesTypes}
          isDone={
            activity.transitionState === 'enter-done' ||
            activity.transitionState === 'enter-active'
          }
        />
      ))}
    </div>
  );
}
