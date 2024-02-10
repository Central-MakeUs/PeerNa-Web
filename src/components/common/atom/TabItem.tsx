import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { TabItemTypes } from '@constants/activities';
import { useFlow } from '@hooks/common/useStackFlow';
import { IconKeyType } from '@type/key';

interface TabItemProps {
  icon: TabItemTypes;
  name: string;
  pathname: TabItemTypes;
  isDone: boolean;
}

export default function TabItem({
  icon,
  name,
  pathname,
  isDone,
}: TabItemProps) {
  const { replace } = useFlow();
  const handleClick = () => replace(icon, {}, { animate: false });

  const getIcon = () => {
    const iconMap: Record<TabItemTypes, string> = {
      HomePage: isDone && pathname === 'HomePage' ? 'HomeFill' : 'Home',
      ProjectPage:
        isDone && pathname === 'ProjectPage' ? 'ProjectFill' : 'Project',
      NotificationPage:
        isDone && pathname === 'NotificationPage' ? 'AlertFill' : 'Alert',
      MyPage: isDone && pathname === 'MyPage' ? 'MyPageFill' : 'MyPage',
    };
    const iconId = iconMap[icon];

    if (iconId) {
      return (
        <SvgIcon
          id={iconId as IconKeyType}
          width={20}
          height={22}
          color={isDone ? 'gray07' : undefined}
        />
      );
    }
    return null;
  };

  return (
    <div
      className="flex-1 flex flex-col items-center cursor-pointer p-2"
      onClick={handleClick}
    >
      {getIcon()}
      <Typography variant="body05" className="text-[10px] text-gray06">
        {name}
      </Typography>
    </div>
  );
}
