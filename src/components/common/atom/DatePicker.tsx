import { format } from 'date-fns';

import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { Calendar } from '@components/shadcn/calendar';
import { Button } from '@components/shadcn/calendarButton';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/shadcn/popover';
import { cn } from '@utils/shadcn';

interface DatePickerProps {
  date: Date | undefined;
  handleDate: (newDate: Date | undefined) => void;
  placeholder: string;
}

export default function DatePicker({
  date,
  handleDate,
  placeholder,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            '!flex-1 !h-[52px] gap-[11px] justify-start font-normal !text-[16px] bg-[#F6F7F8] border-1 border-[#E3E6E8] rounded-xl',
            !date && 'text-muted-foreground',
          )}
        >
          <SvgIcon id="Calendar" width={18} height={18} color="gray07" />
          {date ? (
            format(date, 'yyyy.MM.dd')
          ) : (
            <Typography variant={'body02'}>{placeholder}</Typography>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
