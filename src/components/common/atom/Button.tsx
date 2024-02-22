import { FontVariantsClassName } from '@constants/styles';
import {
  ButtonProps as ButtonPropsWithNextui,
  Button as ButtonWithNextui,
} from '@nextui-org/react';
import { ReactNode } from 'react';

const ButtonVariant = {
  primary: 'bg-primary500 text-white focus:bg-primary600',
  secondary: 'bg-gray07 text-white focus:bg-gray07 focus:text-gray04',
  tertiary: 'bg-gray01 text-gray08 focus:bg-gray01 focus:text-gray04',
  naked: 'text-primary500 focus:text-primary600',
  error: 'bg-danger01 text-white',
};

const ButtonSize = {
  sm: `h-[32px] px-4 py-1.5 ${FontVariantsClassName.body03}`,
  md: `h-[40px] px-4 py-2.5 ${FontVariantsClassName.body03}`,
  lg: `h-[52px] px-8 py-[15px] ${FontVariantsClassName.body01}`,
};

type ButtonVariantTypes = keyof typeof ButtonVariant;
type ButtonSizeTypes = keyof typeof ButtonSize;

export interface ButtonProps extends ButtonPropsWithNextui {
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
      disableAnimation={true}
      variant={buttonVariant === 'naked' ? 'light' : 'solid'}
    >
      {children}
    </ButtonWithNextui>
  );
}
