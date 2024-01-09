export type SvgIconId =
  | 'home'
  | 'home-focus'
  | 'people'
  | 'people-focus'
  | 'project'
  | 'project-focus'
  | 'alert'
  | 'alert-focus'
  | 'mypage'
  | 'mypage-focus';

interface SvgIconProps {
  id: SvgIconId;
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
