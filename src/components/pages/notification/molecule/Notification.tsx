import { NotificationBase } from '@components/pages/notification/molecule/NotificationType';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

interface NotificationProps {
  notification: NotificationBase | null;
}

export default function Notification({ notification }: NotificationProps) {
  const { push } = useFlow();
  if (!notification) return null;
  return <Fragment>{notification.display(push)}</Fragment>;
}
