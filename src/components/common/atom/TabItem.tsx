import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { ActivitiesTypes } from '@constants/activities';
import { IconKeyType } from '@constants/icons';
import { useFlow } from '@hooks/useStackFlow';

interface TabItemProps {
  icon: ActivitiesTypes;
  name: string;
  pathname: ActivitiesTypes;
  isDone: boolean;
}

export default function TabItem({
  icon,
  name,
  pathname,
  isDone,
}: TabItemProps) {
  const { replace } = useFlow();
  const handleClick = () => replace(icon, {});

  const getIcon = () => {
    const iconMap: Record<ActivitiesTypes, string> = {
      Home: isDone && pathname === 'Home' ? 'HomeFill' : 'Home',
      Peer: isDone && pathname === 'Peer' ? 'PeopleFill' : 'People',
      Project: isDone && pathname === 'Project' ? 'ProjectFill' : 'Project',
      Notification:
        isDone && pathname === 'Notification' ? 'AlertFill' : 'Alert',
      Mypage: isDone && pathname === 'Mypage' ? 'MyPageFill' : 'MyPage',
    };
    const iconId = iconMap[icon];

    if (iconId) {
      return (
        <SvgIcon
          id={iconId as IconKeyType}
          color={isDone ? 'gray07' : undefined}
        />
      );
    }
    return null;
  };

  return (
    <div
      className="flex-1 flex flex-col items-center cursor-pointer"
      onClick={handleClick}
    >
      {getIcon()}
      <Typography variant="body05" className="text-[10px] text-gray06">
        {name}
      </Typography>
    </div>
  );
}
