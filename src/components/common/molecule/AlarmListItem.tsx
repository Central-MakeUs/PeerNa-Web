import IconButton from '@components/common/atom/IconButton';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { Palette } from '@constants/styles';
import { useFlow } from '@hooks/useStackFlow';

interface AlarmListItemProps {
  title: string;
  subtitle: string;
}

export default function AlarmListItem({ title, subtitle }: AlarmListItemProps) {
  const { push } = useFlow();
  const handleClick = () => {
    push('ProjectPage', {});
  };

  return (
    <div className="flex justify-between items-center w-[318px] h-[48px] px-5 py-4 rounded-xl box-content bg-primary100 cursor-pointer">
      <div className="flex gap-3">
        <div
          className={`w-[24px] h-[24px] p-3 box-content rounded-full bg-primary200`}
        >
          <SvgIcon id="AddCircle" color="primary400" />
        </div>
        <div className="flex flex-col gap-1">
          <Typography variant="body01">{title}</Typography>
          <Typography variant="body05" className={`text-[${Palette.gray05}]`}>
            {subtitle}
          </Typography>
        </div>
      </div>
      <IconButton
        onClick={handleClick}
        iconProps={{
          id: 'IOSChevronRight',
          color: 'gray07',
        }}
      />
    </div>
  );
}
