import Typography from '@components/common/atom/Typography';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/shadcn/select';

interface DropdownProps {
  values: string[];
  onSelect: (value: string) => void;
}

export default function Dropdown({ values, onSelect }: DropdownProps) {
  return (
    <Select>
      <SelectTrigger className="w-[350px] !bg-[#F6F7F8] border-[#E3E6E8]">
        <SelectValue placeholder="선택" />
      </SelectTrigger>
      <SelectContent sideOffset={5}>
        <SelectGroup>
          {values.map((value, index) => (
            <SelectItem
              key={index}
              value={value}
              onSelect={() => onSelect(value)}
            >
              <Typography variant={'body05'}>{value}</Typography>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
