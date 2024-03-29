import Typography from '@components/common/atom/Typography';
import SvgIcon from './SvgIcon';

interface DropdownProps {
  value: string;
  handleClick: () => void;
}

export default function Dropdown({ value, handleClick }: DropdownProps) {
  return (
    <div
      className="w-full h-[52px] flex justify-between 
    items-center !px-[16px] !py-[14px] !bg-[#F6F7F8] border-1 border-[#E3E6E8] rounded-lg"
      onClick={handleClick}
    >
      <Typography variant="body02" fontColor="gray08">
        {value}
      </Typography>
      <SvgIcon id="ArrowDown" color="gray07" width={14.4} height={7.8} />
    </div>
  );
}
