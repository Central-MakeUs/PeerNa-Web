import { NoticeType } from '@constants/noticeType';
import useGetPeerReviewNotification from '@hooks/api/home/notice/useGetPeerReviewNotification';
import EmptyNotification from '@pages/notification/index/molecule/EmptyNotification';
import Notification from '@pages/notification/index/molecule/Notification';
import {
  ReviewRequestNotification,
  ReviewUpdateNotification,
} from '@pages/notification/index/molecule/NotificationType';
import { getTimeDifference } from '@utils/date';
import { Fragment } from 'react';

export default function ReviewNotificationTab() {
  const { data } = useGetPeerReviewNotification();

  const createAlarmInstance = (
    type: NoticeType,
    params: Record<string, string>,
    title: string,
    subtitle: string,
  ) => {
    switch (type) {
      case NoticeType.ACCEPT_PROJECT_INVITATION:
        return new ReviewRequestNotification(params, title, subtitle);
      case NoticeType.ACCEPT_PROJECT_JOIN_REQUEST:
        return new ReviewUpdateNotification(params, title, subtitle);
      default:
        return null;
    }
  };

  return (
    <Fragment>
      {!data?.pages && <EmptyNotification />}
      {data?.pages.map(group =>
        group.result.map((notification, index) => {
          const NotificationInstance = createAlarmInstance(
            notification.noticeType,
            { id: String(notification.targetId) },
            notification.contents,
            getTimeDifference(notification.createdTime),
          );
          return NotificationInstance ? (
            <Notification key={index} notification={NotificationInstance} />
          ) : null;
        }),
      )}
    </Fragment>
  );
}
