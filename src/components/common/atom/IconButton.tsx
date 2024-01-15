import SvgIcon, { SvgIconProps } from '@components/common/atom/SvgIcon';
import { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconProps: SvgIconProps;
  onClick: () => void;
}

export default function IconButton({
  onClick,
  iconProps,
  ...props
}: IconButtonProps) {
  return (
    <button {...props} onClick={onClick}>
      <SvgIcon {...iconProps} />
    </button>
  );
}
