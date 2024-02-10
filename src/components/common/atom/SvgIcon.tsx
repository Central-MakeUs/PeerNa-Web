import SpriteIcon from '@assets/SpriteIcon.svg';
import { Icon } from '@constants/icons';
import { Palette } from '@constants/styles';
import { IconKeyType } from '@type/key';
import { ColorTypes } from '@type/styles';

export interface SvgIconProps {
  id: IconKeyType;
  width?: number;
  height?: number;
  color?: ColorTypes;
  className?: string;
}

export default function SvgIcon({
  id,
  width = 24,
  height = 24,
  color = 'gray02',
}: SvgIconProps) {
  return (
    <svg width={width} height={height} className={`text-[${Palette[color]}]`}>
      <use href={`${SpriteIcon}#${Icon[id]}`} />
    </svg>
  );
}
