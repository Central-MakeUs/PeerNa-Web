import IntersectionBox from '@components/common/atom/IntersectionBox';
import useGetProjectNotification from '@hooks/api/home/notice/useGetProjectNotification';
import useIntersection from '@hooks/common/useIntersection';
import { Spinner } from '@nextui-org/react';
import EmptyNotification from '@pages/notification/index/molecule/EmptyNotification';
import Project from '@pages/notification/index/molecule/Project';
import {
  ProjectProposeResult,
  ProjectRecruitPropose,
  ProjectRequestJoin,
} from '@pages/notification/index/molecule/ProjectType';
import { NoticeType } from '@type/enums';
import { getTimeDifference } from '@utils/date';
import { Fragment } from 'react';

export default function ProjectNotificationTab() {
  const { data, fetchNextPage, isFetchingNextPage } =
    useGetProjectNotification();
  const intersectionRef = useIntersection(fetchNextPage);

  const createAlarmInstance = (
    type: NoticeType,
    params: Record<string, string>,
    title: string,
    subtitle: string,
    readFlag: boolean,
  ) => {
    switch (type) {
      case NoticeType.REQUEST_JOIN_PROJECT:
        return new ProjectRequestJoin(params, title, subtitle, readFlag);
      case NoticeType.INVITE_TO_PROJECT:
        return new ProjectRecruitPropose(params, title, subtitle, readFlag);
      case NoticeType.ACCEPT_PROJECT_JOIN_REQUEST:
      case NoticeType.DECLINE_PROJECT_JOIN_REQUEST:
      case NoticeType.ACCEPT_PROJECT_INVITATION:
      case NoticeType.DECLINE_PROJECT_INVITATION:
        return new ProjectProposeResult(type, title, subtitle, readFlag);
      default:
        return null;
    }
  };

  return (
    <Fragment>
      {data?.pages.every(group => group.result.length === 0) ? (
        <EmptyNotification />
      ) : (
        data?.pages.map(group =>
          group.result.map((notification, index) => {
            const NotificationInstance = createAlarmInstance(
              notification.noticeType,
              {
                id: String(notification.targetId),
                subTargetId: String(notification.subTargetId),
              },
              notification.contents,
              getTimeDifference(notification.createdTime),
              notification.readFlag,
            );

            return <Project key={index} project={NotificationInstance} />;
          }),
        )
      )}
      <IntersectionBox ref={intersectionRef} />
      {isFetchingNextPage && <Spinner />}
    </Fragment>
  );
}
