import { FontVariantsClassName, PickerSize } from '@constants/styles';
import useFocusTimeout from '@hooks/useFocusTimeout';
import { Button, ButtonProps } from '@nextui-org/react';
import { PickerSizeTypes } from '@type/styles';
import { ReactNode } from 'react';

interface PickerProps extends ButtonProps {
  children: ReactNode;
  size?: PickerSizeTypes;
}

export default function Picker({
  children,
  size = 'md',
  ...props
}: PickerProps) {
  const { isFocused, handleFocus } = useFocusTimeout();

  const focusStyles = isFocused
    ? 'focus:bg-secondary-orange focus:border-secondary-orange focus:text-secondary-orange'
    : '';

  const commonStyle = `
    flex-1
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

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleFocus();
    props.onClick?.(event);
  };

  return (
    <Button
      {...props}
      className={buttonClassName}
      color="primary"
      variant="bordered"
      onClick={handleButtonClick}
    >
      {children}
    </Button>
  );
}
