import EmptyNotification from '@components/pages/notification/molecule/EmptyNotification';
import Project from '@components/pages/notification/molecule/Project';
import {
  ProjectProposeResult,
  ProjectRecruitPropose,
} from '@components/pages/notification/molecule/ProjectType';
import { NoticeType } from '@constants/noticeType';
import { useGetProjectNotification } from '@hooks/api/home/notice/useGetProjectNotification';
import { getTimeDifference } from '@utils/date';
import { Fragment } from 'react';

export default function ProjectNotificationTab() {
  const { data } = useGetProjectNotification();

  const createAlarmInstance = (
    type: NoticeType,
    params: Record<string, string>,
    title: string,
    subtitle: string,
  ) => {
    switch (type) {
      case NoticeType.INVITE_TO_PROJECT:
        return new ProjectRecruitPropose(params, title, subtitle);
      case NoticeType.ACCEPT_PROJECT_JOIN_REQUEST:
        return new ProjectProposeResult(type, title, subtitle);
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

          return <Project key={index} project={NotificationInstance} />;
        }),
      )}
    </Fragment>
  );
}
