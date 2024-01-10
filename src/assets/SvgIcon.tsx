import SpriteIcon from '@assets/SpriteIcon.svg';
import { Icon, IconId } from '@constants/icons';
import { Palette } from '@constants/styles';
import { ColorTypes } from '@type/styles';

interface SvgIconProps {
  id: IconId;
  width?: number;
  height?: number;
  color?: ColorTypes;
}

const SvgIcon = ({
  id,
  width = 24,
  height = 24,
  color = 'gray02',
}: SvgIconProps) => {
  return (
    <svg width={width} height={height} className={`text-[${Palette[color]}]`}>
      <use href={`${SpriteIcon}#${Icon[id]}`} />
    </svg>
  );
};

export default SvgIcon;
