import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { Palette } from '@constants/styles';
import { useEffect, useState } from 'react';

interface ProjectProps {
  title: string;
  subtitle: string;
  date: string;
}

export default function Project({ title, subtitle, date }: ProjectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    console.log(1);
    setIsFocused(true);
  };

  useEffect(() => {
    let focusTimeout: NodeJS.Timeout;
    if (isFocused) focusTimeout = setTimeout(() => setIsFocused(false), 500);
    return () => clearTimeout(focusTimeout);
  }, [isFocused]);

  return (
    <div
      className={`w-[318px] h-[71px] p-5 bg-gray01 flex gap-3 box-content cursor-pointer rounded-xl border-1 transition-colors ${
        isFocused ? 'bg-primary100 border-primary500' : null
      }`}
      onClick={handleFocus}
    >
      <div>
        <SvgIcon id="GroupPerson" color="white" width={52} height={52} />
      </div>
      <div className="w-[calc(100%-52px)] flex flex-col gap-1">
        <Typography variant="header03">{title}</Typography>
        <Typography
          variant="body01"
          className={`w-full text-[${Palette.gray06}] overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {subtitle}
        </Typography>
        <Typography variant="body03" className={`text-[${Palette.gray04}]`}>
          {date}
        </Typography>
      </div>
    </div>
  );
}
