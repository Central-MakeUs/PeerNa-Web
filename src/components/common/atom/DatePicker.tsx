import * as React from 'react';
import { format } from 'date-fns';

import { cn } from '@utils/shadcn';
import { Calendar } from '@components/common/atom/calendar';
import Typography from '@components/common/atom/Typography';
import SvgIcon from '@components/common/atom/SvgIcon';
import { Button } from '@components/common/atom/calendarButton';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/common/atom/popover';

const DatePicker = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            '!w-[161px] !h-[52px] gap-[11px] justify-start font-normal !text-[16px] bg-[#F6F7F8] border-1 border-[#E3E6E8] rounded-xl',
            !date && 'text-muted-foreground',
          )}
        >
          <SvgIcon id="Calendar" width={18} height={18} color="gray07" />
          {date ? (
            format(date, 'yyyy.MM.dd')
          ) : (
            <Typography variant={'body02'}>시작일</Typography>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
