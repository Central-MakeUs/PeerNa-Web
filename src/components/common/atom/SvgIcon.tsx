import { IconId } from '@constants/icons';

interface SvgIconProps {
  id: IconId;
  width?: number;
  height?: number;
  color?: string;
}

const SvgIcon = ({ id, width = 24, height = 20, color }: SvgIconProps) => {
  return (
    <svg width={width} height={height} fill={color}>
      <use href={`#${id}`} />
    </svg>
  );
};

export default SvgIcon;
