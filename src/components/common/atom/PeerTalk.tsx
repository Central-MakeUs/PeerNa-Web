import {
  ChipProps as ChipPropsWithNextui,
  Chip as ChipWithNextui,
} from '@nextui-org/react';
import Typography from '@components/common/atom/Typography';
import { Palette } from '@constants/styles';

interface TalkProps extends ChipPropsWithNextui {
  count: number;
  icon: React.ReactNode;
  children: string;
}

export default function PeerTalk({
  count,
  icon,
  children,
  ...props
}: TalkProps) {
  const talkStyle = 'rounded-xl pl-4 pr-2 py-2 box-content flex gap-2';
  return (
    <div className="flex gap-3 items-center">
      <Typography variant="body01" fontColor="primary">
        {count}
      </Typography>
      <ChipWithNextui
        {...props}
        startContent={icon}
        className={talkStyle}
        classNames={{
          base: `bg-[${Palette.gray01}] border-1 border-${Palette.gray02}`,
        }}
      >
        <Typography variant="body02">{children}</Typography>
      </ChipWithNextui>
    </div>
  );
}