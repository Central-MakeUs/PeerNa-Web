import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';

interface SelectListItemProps {
  title: string;
  isSelect?: boolean;
  onClick?: () => void;
}

export default function SelectListItem({
  title,
  isSelect,
  onClick,
}: SelectListItemProps) {
  return (
    <div
      className={`w-full h-[40px] flex flex-col justify-center p-2 cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-full flex justify-between">
        <Typography
          variant="body01"
          className={`${isSelect ? 'text-primary500' : 'text-gray08'}`}
        >
          {title}
        </Typography>
        {isSelect && (
          <SvgIcon id="Check" color="primary500" width={18} height={13} />
        )}
      </div>
    </div>
  );
}
