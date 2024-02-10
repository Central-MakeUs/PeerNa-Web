import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { Palette } from '@constants/styles';
import {
  ChipProps as ChipPropsWithNextui,
  Chip as ChipWithNextui,
} from '@nextui-org/react';
import { IconKeyType } from '@type/key';
import { ColorTypes } from '@type/styles';
import { getRgbaColorWithOpacity } from '@utils/styles';

interface ChipProps extends ChipPropsWithNextui {
  chipType: keyof typeof ChipTypeClassNames;
  children: string;
  icon: string;
}

const ChipTypeClassNames: Record<
  'D' | 'I' | 'S' | 'C' | 'isDisabled',
  Extract<
    ColorTypes,
    | 'secondary-purple'
    | 'secondary-pink'
    | 'primary500'
    | 'secondary-yellow'
    | 'gray04'
  >
> = {
  C: 'secondary-yellow',
  I: 'primary500',
  D: 'secondary-purple',
  S: 'secondary-pink',
  isDisabled: 'gray04',
};

export default function Chip({ chipType, children, icon }: ChipProps) {
  const chipColor = ChipTypeClassNames[chipType];
  const bgOpacityStyle = getRgbaColorWithOpacity(Palette[chipColor], 0.2);
  const bgStyle =
    chipType === 'isDisabled'
      ? { backgroundColor: Palette.gray01 }
      : chipType === 'I'
        ? { backgroundColor: Palette.primary100 }
        : bgOpacityStyle;

  const textStyle = chipType === 'isDisabled' ? 'gray04' : 'gray08';

  return (
    <ChipWithNextui className="flex !px-2 h-[36px]" style={bgStyle}>
      <div className="flex flex-nowrap gap-1">
        <Typography variant="body04" fontColor={textStyle}>
          {children}
        </Typography>
        <SvgIcon
          id={icon as unknown as IconKeyType}
          width={20}
          height={20}
          color={chipColor}
        />
      </div>
    </ChipWithNextui>
  );
}
