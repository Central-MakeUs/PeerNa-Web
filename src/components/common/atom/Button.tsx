import { FontVariantsClassName } from '@constants/styles';
import {
  ButtonProps as ButtonPropsWithNextui,
  Button as ButtonWithNextui,
} from '@nextui-org/react';
import { ReactNode } from 'react';

const ButtonVariant = {
  primary: 'bg-primary500 text-white',
  secondary: 'bg-gray07 text-white',
  tertiary: 'bg-gray01 text-black',
  naked: 'text-primary500',
};

const ButtonSize = {
  sm: `w-[44px] h-[20px] px-4 py-1.5 ${FontVariantsClassName.body03}`,
  md: `w-[48px] h-[20px] px-4 py-2.5 ${FontVariantsClassName.body03}`,
  lg: `w-[52px] h-[22px] px-8 py-[15px] ${FontVariantsClassName.body01}`,
};

type ButtonVariantTypes = keyof typeof ButtonVariant;
type ButtonSizeTypes = keyof typeof ButtonSize;

interface ButtonProps extends ButtonPropsWithNextui {
  children: ReactNode;
  buttonVariant?: ButtonVariantTypes;
  buttonSize?: ButtonSizeTypes;
}

export default function Button({
  children,
  buttonVariant = 'primary',
  buttonSize = 'lg',
  ...props
}: ButtonProps) {
  const { isDisabled, className } = props;

  const buttonClassNames = [
    'box-content',
    ButtonSize[buttonSize],
    ButtonVariant[buttonVariant],
    isDisabled ? 'bg-gray02 text-gray04 opacity-100' : '',
    buttonVariant === 'naked' ? 'bg-transparent' : '',
    className || '',
    'w-full',
    'min-w-0',
  ].join(' ');

  return (
    <ButtonWithNextui
      {...props}
      className={buttonClassNames}
      disabled={isDisabled}
      variant={buttonVariant === 'naked' ? 'light' : 'solid'}
    >
      {children}
    </ButtonWithNextui>
  );
}
