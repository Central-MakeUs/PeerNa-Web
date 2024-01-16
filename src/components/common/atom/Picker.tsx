import { FontVariantsClassName, PickerSize } from '@constants/styles';
import useFocusTimeout from '@hooks/useFocusTimeout';
import { Button } from '@nextui-org/react';
import { ButtonProps } from '@react-types/button';
import { PickerSizeTypes } from '@type/styles';

interface PickerProps extends ButtonProps {
  text: string;
  size: PickerSizeTypes;
  icon?: React.ReactNode;
}

export default function Picker({ text, size, icon, ...props }: PickerProps) {
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
    size === 'sm'
      ? `${FontVariantsClassName.body02} ${commonStyle}`
      : `${FontVariantsClassName.header03} ${commonStyle}`
  } 
    
  `;

  return (
    <Button
      {...props}
      className={buttonClassName}
      color="primary"
      variant="bordered"
      onClick={handleFocus}
    >
      {icon && icon}
      {text}
    </Button>
  );
}
