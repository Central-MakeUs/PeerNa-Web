import SvgIcon from './SvgIcon';
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
      return pathname === 'Home' && isDone ? (
        <SvgIcon id="home-focus" />
      ) : (
        <SvgIcon id="home" />
      );
    case 'Peer':
      return pathname === 'Peer' && isDone ? (
        <SvgIcon id="people-focus" />
      ) : (
        <SvgIcon id="people" />
      );
    case 'Project':
      return pathname === 'Project' && isDone ? (
        <SvgIcon id="project-focus" />
      ) : (
        <SvgIcon id="project" />
      );
    case 'Notification':
      return pathname === 'Notification' && isDone ? (
        <SvgIcon id="alert-focus" />
      ) : (
        <SvgIcon id="alert" />
      );
    case 'Mypage':
      return pathname === 'Mypage' && isDone ? (
        <SvgIcon id="mypage-focus" />
      ) : (
        <SvgIcon id="mypage" />
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
