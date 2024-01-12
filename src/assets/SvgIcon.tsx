import SpriteIcon from '@assets/SpriteIcon.svg';
import { Icon, IconId } from '@constants/icons';
import { Palette } from '@constants/styles';
import { ColorTypes } from '@type/styles';

export interface SvgIconProps {
  id: IconId;
  width?: number;
  height?: number;
  fill?: string;
  color?: ColorTypes;
  className?: string;
}

const SvgIcon = ({
  id,
  width = 24,
  height = 24,
  fill = 'none',
  color = 'gray02',
  className,
}: SvgIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      className={`text-[${Palette[color]}] ${className}`}
    >
      <use href={`${SpriteIcon}#${Icon[id]}`} />
    </svg>
  );
};

export default SvgIcon;
