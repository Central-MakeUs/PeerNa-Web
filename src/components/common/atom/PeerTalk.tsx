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
  <div className="flex w-full items-center">
      <Typography
        variant="body01"
        fontColor="primary"
        as="span"
        className="mr-3"
      >
        {count}
      </Typography>
      <ChipWithNextui
        {...props}
        startContent={icon}
        className={talkStyle}
        classNames={{
          base: `bg-primary100`,
          content: 'w-[316px]',
        }}
      >
        <Typography variant="body02">{children}</Typography>
      </ChipWithNextui>
    </div>
  );
}
