import { FontVariantsClassName, PickerSize } from '@constants/styles';
import useFocusTimeout from '@hooks/useFocusTimeout';
import { Button } from '@nextui-org/react';
import { ButtonProps } from '@react-types/button';
import { PickerSizeTypes } from '@type/styles';

interface PickerProps extends ButtonProps {
  size: PickerSizeTypes;
  children: React.ReactNode;
}

export default function Picker({ size, children, ...props }: PickerProps) {
  const { isFocused, handleFocus } = useFocusTimeout();

  const focusStyles = isFocused
    ? 'focus:bg-secondary-orange focus:border-secondary-orange focus:text-secondary-orange'
    : '';

  const commonStyle = `
    text-gray07
    bg-gray01 
    border-2 
    border-gray02
    focus:bg-opacity-20
    ${focusStyles}
  `;

  const buttonClassName = `${PickerSize[size]}
  ${
    size === 'md'
      ? FontVariantsClassName.header03
      : `${FontVariantsClassName.body02} gap-1`
  } ${commonStyle}`;

  return (
    <Button
      {...props}
      className={buttonClassName}
      color="primary"
      variant="bordered"
      onClick={handleFocus}
    >
      {children}
    </Button>
  );
}
