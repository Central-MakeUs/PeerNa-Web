import { useFlow } from '@hooks/common/useStackFlow';
import { NotificationBase } from '@pages/notification/index/molecule/NotificationType';
import { PushFunction } from '@pages/notification/index/molecule/ProjectType';
import { Fragment } from 'react';

interface NotificationProps {
  notification: NotificationBase | null;
}

export default function Notification({ notification }: NotificationProps) {
  const { push } = useFlow();
  if (!notification) return null;
  return (
    <Fragment>{notification.display(push as PushFunction<string>)}</Fragment>
  );
}
