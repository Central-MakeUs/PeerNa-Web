import SvgIcon from '@assets/SvgIcon';
import { SvgIconProps } from '@assets/SvgIcon';

interface IconButtonProps extends SvgIconProps {
  onClick: () => void;
}

const IconButton = ({ onClick, ...props }: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <SvgIcon {...props} />
    </button>
  );
};

export default IconButton;
