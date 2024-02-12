import Typography from '@components/common/atom/Typography';
import {
  ChipProps as ChipPropsWithNextui,
  Chip as ChipWithNextui,
} from '@nextui-org/react';

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
  const talkStyle = 'rounded-xl pl-4 pr-2 py-2 box-content';
  return (
    <div className="flex w-full gap-2 items-center">
      <Typography variant="body01" fontColor="primary" className="w-[20px]">
        {count.toString()}
      </Typography>
      <ChipWithNextui
        {...props}
        startContent={icon}
        className={talkStyle}
        classNames={{
          base: `bg-primary100`,
        }}
      >
        <Typography variant="body02" className="!whitespace-nowrap">
          {children}
        </Typography>
      </ChipWithNextui>
    </div>
  );
}
