import Typography from '@components/common/atom/Typography';
import SvgIcon from './SvgIcon';

interface DropdownProps {
  value: string;
  onClick: () => void;
}

export default function Dropdown({ value, onClick }: DropdownProps) {
  return (
    <div
      className="w-[350px] h-[52px] flex justify-between 
    items-center !px-[16px] !py-[14px] !bg-[#F6F7F8] border-1 border-[#E3E6E8] rounded-lg"
      onClick={onClick}
    >
      <Typography variant="body02" fontColor="gray08">
        {value}
      </Typography>
      <SvgIcon id="ArrowDown" color="gray07" width={14.4} height={7.8} />
    </div>
  );
}
