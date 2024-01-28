import Notification from '@components/pages/notification/molecule/Notification';
import {
  ReviewRequestNotification,
  ReviewUpdateNotification,
} from '@components/pages/notification/molecule/NotificationType';

export default function ReviewNotificationTab() {
  const mocks: {
    type: 'request' | 'update';
    params: Record<string, string>;
    title: string;
    subtitle: string;
  }[] = [
    {
      type: 'request',
      params: { uuid: '0c50bc8a-7c3b-4bf7-9db2-5c162bfdcb55&step=1' },
      title: '누구누구님이 피어 테스트 응답을 요청했어요.',
      subtitle: '1분 전',
    },
    {
      type: 'update',
      params: {},
      title: '업데이트된 응답 분석 결과를 확인해보세요!',
      subtitle: '1 분전',
    },
  ];

  const createAlarmInstance = (
    type: 'request' | 'update',
    params: Record<string, string>,
    title: string,
    subtitle: string,
  ) => {
    switch (type) {
      case 'request':
        return new ReviewRequestNotification(params, title, subtitle);
      case 'update':
        return new ReviewUpdateNotification(params, title, subtitle);
      default:
        return null;
    }
  };
  return (
    <div>
      {mocks.map((v, index) => {
        const NotificationInstance = createAlarmInstance(
          v.type,
          v.params,
          v.title,
          v.subtitle,
        );
        return NotificationInstance ? (
          <Notification key={index} notification={NotificationInstance} />
        ) : null;
      })}
    </div>
  );
}
