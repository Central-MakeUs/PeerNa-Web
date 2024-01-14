import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { useFlow } from '@hooks/StackFlow';
import { ActivitiesTypes } from '@type/activities';

const getIcon = (
  icon: ActivitiesTypes,
  pathname: ActivitiesTypes,
  isDone: boolean,
) => {
  switch (icon) {
    case 'Home':
      return pathname === 'Home' && isDone ? (
        <SvgIcon id="HomeFill" color="gray07" />
      ) : (
        <SvgIcon id="Home" />
      );
    case 'Peer':
      return pathname === 'Peer' && isDone ? (
        <SvgIcon id="PeopleFill" color="gray07" />
      ) : (
        <SvgIcon id="People" />
      );
    case 'Project':
      return pathname === 'Project' && isDone ? (
        <SvgIcon id="ProjectFill" color="gray07" />
      ) : (
        <SvgIcon id="Project" />
      );
    case 'Notification':
      return pathname === 'Notification' && isDone ? (
        <SvgIcon id="AlertFill" color="gray07" />
      ) : (
        <SvgIcon id="Alert" />
      );
    case 'Mypage':
      return pathname === 'Mypage' && isDone ? (
        <SvgIcon id="MyPageFill" color="gray07" />
      ) : (
        <SvgIcon id="MyPage" />
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
