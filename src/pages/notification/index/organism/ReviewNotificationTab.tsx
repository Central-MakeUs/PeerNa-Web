import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import useGetPeerReviewNotification from '@hooks/api/home/notice/useGetPeerReviewNotification';
import useIntersection from '@hooks/common/useIntersection';
import EmptyNotification from '@pages/notification/index/molecule/EmptyNotification';
import Notification from '@pages/notification/index/molecule/Notification';
import {
  ReviewRequestNotification,
  ReviewUpdateNotification,
} from '@pages/notification/index/molecule/NotificationType';
import { NoticeType } from '@type/enums';
import { getTimeDifference } from '@utils/date';
import { Fragment } from 'react';

export default function ReviewNotificationTab() {
  const { data, fetchNextPage, isFetchingNextPage } =
    useGetPeerReviewNotification();
  const intersectionRef = useIntersection(fetchNextPage);

  const createAlarmInstance = (
    type: NoticeType,
    params: Record<string, string>,
    title: string,
    subtitle: string,
    readFlag: boolean,
    doneFlag: boolean,
  ) => {
    switch (type) {
      case NoticeType.PEER_TEST_REQUEST:
        return new ReviewRequestNotification(
          params,
          title,
          subtitle,
          readFlag,
          doneFlag,
        );
      case NoticeType.PEER_TEST_RESULT_UPDATE:
        return new ReviewUpdateNotification(params, title, subtitle, readFlag);
      default:
        return null;
    }
  };

  return (
    <Fragment>
      {data?.pages.every(group => group.result.length === 0) ? (
        <div className="w-full h-[calc(100%-50px)] flex items-center justify-center">
          <EmptyNotification />
        </div>
      ) : (
        data?.pages.map(group =>
          group.result.map((notification, index) => {
            const NotificationInstance = createAlarmInstance(
              notification.noticeType,
              { memberId: String(notification.targetId) },
              notification.contents,
              getTimeDifference(notification.createdTime),
              notification.readFlag,
              notification.doneFlag == 'true',
            );
            return NotificationInstance ? (
              <Notification key={index} notification={NotificationInstance} />
            ) : null;
          }),
        )
      )}
      <IntersectionBox ref={intersectionRef} />
      {isFetchingNextPage && <Spinner />}
    </Fragment>
  );
}
