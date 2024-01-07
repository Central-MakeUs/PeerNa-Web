import {
  AlertFillIcon,
  AlertIcon,
  ClipboardFillIcon,
  ClipboardIcon,
  ContactFillIcon,
  ContactIcon,
  HomeFillIcon,
  HomeIcon,
  PeopleFillIcon,
  PeopleIcon,
} from '@assets/icons';
import { useFlow } from '@components/common/atom/StackFlow';
import Typography from '@components/common/atom/Typography';
import { ActivitiesTypes } from '@type/activities';

const getIcon = (
  icon: ActivitiesTypes,
  pathname: ActivitiesTypes,
  isDone: boolean,
) => {
  switch (icon) {
    case 'Home':
      return pathname === 'Home' && isDone ? <HomeFillIcon /> : <HomeIcon />;
    case 'Peer':
      return pathname === 'Peer' && isDone ? (
        <PeopleFillIcon />
      ) : (
        <PeopleIcon />
      );
    case 'Project':
      return pathname === 'Project' && isDone ? (
        <ClipboardFillIcon />
      ) : (
        <ClipboardIcon />
      );
    case 'Notification':
      return pathname === 'Notification' && isDone ? (
        <AlertFillIcon />
      ) : (
        <AlertIcon />
      );
    case 'Mypage':
      return pathname === 'Mypage' && isDone ? (
        <ContactFillIcon />
      ) : (
        <ContactIcon />
      );
    default:
      return null;
  }
};

interface TabItemProps {
  icon: ActivitiesTypes;
  name: string;
  pathname: ActivitiesTypes;
  isDone: boolean;
}

const TabItem = ({ icon, name, pathname, isDone }: TabItemProps) => {
  const { replace } = useFlow();
  const handleClick = () => replace(icon, {});

  return (
    <div
      className="flex-1 flex flex-col items-center cursor-pointer"
      onClick={handleClick}
    >
      {getIcon(icon, pathname, isDone)}
      <Typography variant="body05" className="text-[10px] text-gray06">
        {name}
      </Typography>
    </div>
  );
};

export default TabItem;
