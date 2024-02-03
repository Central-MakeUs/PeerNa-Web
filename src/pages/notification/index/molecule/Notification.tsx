import { useFlow } from '@hooks/useStackFlow';
import { NotificationBase } from '@pages/notification/index/molecule/NotificationType';
import { Fragment } from 'react';

interface NotificationProps {
  notification: NotificationBase | null;
}

export default function Notification({ notification }: NotificationProps) {
  const { push } = useFlow();
  if (!notification) return null;
  return <Fragment>{notification.display(push)}</Fragment>;
}
