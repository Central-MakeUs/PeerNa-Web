import SpriteIcon from '@assets/SpriteIcon.svg';
import { Icon, IconId } from '@constants/icons';

export interface SvgIconProps {
  id: IconId;
  width?: number;
  height?: number;
  color?: string;
}

const SvgIcon = ({
  id,
  width = 24,
  height = 20,
  color = 'currentColor',
}: SvgIconProps) => {
  return (
    <svg width={width} height={height} fill={color}>
      <use href={`${SpriteIcon}#${Icon[id]}`} />
    </svg>
  );
};

export default SvgIcon;
