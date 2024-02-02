import {
  ChipProps as ChipPropsWithNextui,
  Chip as ChipWithNextui,
} from '@nextui-org/react';
import Typography from '@components/common/atom/Typography';

interface TalkProps extends ChipPropsWithNextui {
  type: string;
  children: string;
}

export default function Talk({ type, children }: TalkProps) {
  const bgStyle = `${type === 'dimed' ? `bg-gray01` : type === 'filled' ? `bg-white bg-opacity-40` : ''}`;

  const textStyle = `"${children}"`;

  return (
    <ChipWithNextui
      className="rounded-xl px-2 py-1 box-content"
      classNames={{
        base: bgStyle,
      }}
    >
      <Typography variant="body02">{textStyle}</Typography>
    </ChipWithNextui>
  );
}
