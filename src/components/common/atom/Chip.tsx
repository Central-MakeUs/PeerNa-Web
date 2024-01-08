import { ColorIcon } from '@assets/icons';
import Typography from '@components/common/atom/Typography';
import { Palette } from '@constants/styles';
import {
  Chip as ChipWithNextui,
  ChipProps as ChipPropsWithNextui,
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

const Chip = ({ type, children }: ChipProps) => {
  const bgOpacityOption = getRgbaColorWithOpacity(
    Palette[ChipTypeClassNames[type]],
    0.2,
  );

  const textColor =
    Palette[ChipTypeClassNames[type]] === Palette.primary100
      ? Palette.primary500
      : Palette[ChipTypeClassNames[type]];

  return (
    <ChipWithNextui className={`h-[36px] `} style={bgOpacityOption}>
      <div className="flex gap-1">
        <Typography
          variant="body04"
          className={`text-[${
            type === 'isDisabled' ? Palette.gray04 : undefined
          }]`}
        >
          {children}
        </Typography>
        <ColorIcon className={`text-[${textColor}]`} />
      </div>
    </ChipWithNextui>
  );
};

export default Chip;
