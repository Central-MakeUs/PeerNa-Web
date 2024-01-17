import {
  ChipProps as ChipPropsWithNextui,
  Chip as ChipWithNextui,
} from '@nextui-org/react';
import Typography from '@components/common/atom/Typography';
import { getRgbaColorWithOpacity } from '@utils/styles';
import { Palette } from '@constants/styles';

interface TalkProps extends ChipPropsWithNextui {
  type: string;
  children: string;
}

export default function Talk({ type, children }: TalkProps) {
  const bgOpacity = getRgbaColorWithOpacity(Palette.white, 0.4);

  const textStyle = `"${children}"`;

  const bgStyle = () => {
    if (type === 'dimed') return `bg-[${Palette.gray01}]`;
    if (type === 'filled') return `bg-[${bgOpacity}]`;
  };
  return (
    <ChipWithNextui
      className="rounded-xl px-4 py-2 box-content"
      classNames={{
        base: bgStyle(),
      }}
    >
      <Typography variant="body02">{textStyle}</Typography>
    </ChipWithNextui>
  );
}
