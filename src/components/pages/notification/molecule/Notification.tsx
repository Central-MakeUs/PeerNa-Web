import { NotificationBase } from '@components/pages/notification/molecule/NotificationType';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

interface NotificationProps {
  notification: NotificationBase;
}

export default function Notification({ notification }: NotificationProps) {
  const { push } = useFlow();
  return <Fragment>{notification.display(push)}</Fragment>;
}
