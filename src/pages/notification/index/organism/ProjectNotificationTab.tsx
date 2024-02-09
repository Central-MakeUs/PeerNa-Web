import useGetProjectNotification from '@hooks/api/home/notice/useGetProjectNotification';
import EmptyNotification from '@pages/notification/index/molecule/EmptyNotification';
import Project from '@pages/notification/index/molecule/Project';
import {
  ProjectProposeResult,
  ProjectRecruitPropose,
} from '@pages/notification/index/molecule/ProjectType';
import { NoticeType } from '@type/enums';
import { getTimeDifference } from '@utils/date';
import { Fragment } from 'react';

export default function ProjectNotificationTab() {
  const { data } = useGetProjectNotification();

  const createAlarmInstance = (
    type: NoticeType,
    params: Record<string, string>,
    title: string,
    subtitle: string,
    readFlag: boolean,
  ) => {
    switch (type) {
      case NoticeType.INVITE_TO_PROJECT:
        return new ProjectRecruitPropose(params, title, subtitle, readFlag);
      case NoticeType.ACCEPT_PROJECT_JOIN_REQUEST:
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
              { id: String(notification.targetId) },
              notification.contents,
              getTimeDifference(notification.createdTime),
              notification.readFlag,
            );

            return <Project key={index} project={NotificationInstance} />;
          }),
        )
      )}
    </Fragment>
  );
}
