import { FontVariantsClassName } from '@constants/styles';
import useFocusTimeout from '@hooks/useFocusTimeout';
import {
  ButtonProps as ButtonPropsWithNextui,
  Button as ButtonWithNextui,
} from '@nextui-org/react';
import { ReactNode } from 'react';

type ButtonVariantTypes = keyof typeof ButtonVariant;
type ButtonSizeTypes = keyof typeof ButtonSize;

interface ButtonProps extends ButtonPropsWithNextui {
  children: ReactNode;
  buttonVariant?: ButtonVariantTypes;
  buttonSize?: ButtonSizeTypes;
}

const ButtonVariant = {
  primary: (isFocused: boolean) =>
    `bg-primary500 text-white ${isFocused ? 'focus:bg-[#F36216]' : ''}`,
  secondary: (isFocused: boolean) =>
    `bg-gray07 text-white ${isFocused ? 'focus:text-gray04' : ''}`,
  tertiary: (isFocused: boolean) =>
    `bg-gray01 text-black ${isFocused ? 'focus:text-gray04' : ''}`,
  naked: (isFocused: boolean) =>
    `text-primary500 ${isFocused ? 'focus:text-[#F36216]' : ''}`,
};

const ButtonSize = {
  sm: `w-[44px] h-[20px] px-4 py-1.5 ${FontVariantsClassName.body03}`,
  md: `w-[48px] h-[20px] px-4 py-2.5 ${FontVariantsClassName.body03}`,
  lg: `w-[52px] h-[22px] px-8 py-[15px] ${FontVariantsClassName.body01}`,
};

const Button = ({
  children,
  buttonVariant = 'primary',
  buttonSize = 'lg',
  ...props
}: ButtonProps) => {
  const { isDisabled } = props;
  const { isFocused, handleFocus } = useFocusTimeout();

  return (
    <ButtonWithNextui
      {...props}
      className={`
      box-content
      ${ButtonSize[buttonSize]}
      ${ButtonVariant[buttonVariant](isFocused)} 
      ${isDisabled ? 'bg-gray02 !text-gray04 opacity-100' : ''}
      ${buttonVariant === 'naked' ? '!bg-transparent' : ''}
      ${props.className}
      `}
      isDisabled={!!isDisabled}
      onClick={handleFocus}
      variant={buttonVariant === 'naked' ? 'light' : 'solid'}
    >
      {children}
    </ButtonWithNextui>
  );
};

export default Button;
