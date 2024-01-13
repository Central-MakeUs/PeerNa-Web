import Typography from '@components/common/atom/Typography';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';

const Dropdown = () => {
  return (
    <Select>
      <SelectTrigger
        className="w-[350px] 
      !bg-[#F6F7F8] border-[#E3E6E8]"
      >
        <SelectValue placeholder="선택" />
      </SelectTrigger>
      <SelectContent sideOffset={5}>
        <SelectItem value="직업이에요">
          <Typography variant={'body05'}>직업이에요</Typography>
        </SelectItem>
        <SelectItem value="직업이요">
          <Typography variant={'body05'}>직업이요</Typography>
        </SelectItem>
        <SelectItem value="직업">
          <Typography variant={'body05'}>직업</Typography>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
