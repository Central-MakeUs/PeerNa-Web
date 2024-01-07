import { FontVariantsClassName } from '@constants/styles';
import {
  Button as ButtonWithNextui,
  ButtonProps as ButtonPropsWithNextui,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';

type ButtonVariantTypes = keyof typeof ButtonVariant;
type ButtonSizeTypes = keyof typeof ButtonSize;

interface ButtonProps extends ButtonPropsWithNextui {
  children: string;
  buttonVariant?: ButtonVariantTypes;
  buttonSize?: ButtonSizeTypes;
}

const ButtonVariant = {
  primary: (isFocused: boolean) =>
    `bg-primary500 text-white ${isFocused && 'focus:bg-[#F36216]'}`,
  secondary: (isFocused: boolean) =>
    `bg-gray07 text-white ${isFocused && 'focus:text-gray04'}`,
  tertiary: (isFocused: boolean) =>
    `bg-gray01 text-black ${isFocused && 'focus:text-gray04'}`,
  naked: (isFocused: boolean) =>
    `text-primary500 ${isFocused && 'focus:text-[#F36216]'}`,
};

const ButtonSize = {
  sm: `w-[76px] h-[32px] ${FontVariantsClassName.body03}`,
  md: `w-[88px] h-[40px] ${FontVariantsClassName.body03}`,
  lg: `w-[116px] h-[52px] ${FontVariantsClassName.body01}`,
};

const Button = ({
  children,
  buttonVariant = 'primary',
  buttonSize = 'lg',
  ...props
}: ButtonProps) => {
  const { isDisabled } = props;
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);

  useEffect(() => {
    let focusTimeout: NodeJS.Timeout;
    if (isFocused) focusTimeout = setTimeout(() => setIsFocused(false), 500);
    return () => clearTimeout(focusTimeout);
  }, [isFocused]);

  return (
    <ButtonWithNextui
      className={`
        ${ButtonSize[buttonSize]}
        ${ButtonVariant[buttonVariant](isFocused)} 
        ${isDisabled && 'bg-gray02 !text-gray04 opacity-100'}
        ${buttonVariant === 'naked' && '!bg-transparent'}
      `}
      isDisabled={!!isDisabled}
      onClick={handleFocus}
      variant={buttonVariant === 'naked' ? 'light' : 'solid'}
      {...props}
    >
      {children}
    </ButtonWithNextui>
  );
};

export default Button;
