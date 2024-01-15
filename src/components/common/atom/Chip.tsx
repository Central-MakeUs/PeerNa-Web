import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { Palette } from '@constants/styles';
import {
  ChipProps as ChipPropsWithNextui,
  Chip as ChipWithNextui,
} from '@nextui-org/react';
import { ColorTypes } from '@type/styles';
import { getRgbaColorWithOpacity } from '@utils/styles';

interface ChipProps extends ChipPropsWithNextui {
  type: keyof typeof ChipTypeClassNames;
  children: string;
}

const ChipTypeClassNames: Record<
  'C' | 'I' | 'D' | 'S' | 'isDisabled',
  Extract<
    ColorTypes,
    | 'secondary-purple'
    | 'secondary-pink'
    | 'primary100'
    | 'secondary-yellow'
    | 'gray04'
  >
> = {
  C: 'secondary-purple',
  I: 'secondary-pink',
  D: 'primary100',
  S: 'secondary-yellow',
  isDisabled: 'gray04',
};

export default function Chip({ type, children }: ChipProps) {
  const chipColor = Palette[ChipTypeClassNames[type]];
  const bgOpacityStyle = getRgbaColorWithOpacity(chipColor, 0.2);
  const textColor: ColorTypes =
    chipColor === Palette.primary100 ? 'primary500' : ChipTypeClassNames[type];
  const textStyle =
    type === 'isDisabled' ? { color: Palette.gray04 } : undefined;

  return (
    <ChipWithNextui className="h-[36px]" style={bgOpacityStyle}>
      <div className="flex flex-nowrap gap-1">
        <Typography variant="body04" style={textStyle}>
          {children}
        </Typography>
        <SvgIcon id="Process" width={20} height={20} color={textColor} />
      </div>
    </ChipWithNextui>
  );
}
