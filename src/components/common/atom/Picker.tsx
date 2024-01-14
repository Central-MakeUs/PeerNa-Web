import { FontVariantsClassName, PickerSize } from '@constants/styles';
import useFocusTimeout from '@hooks/useFocusTimeout';
import { Button } from '@nextui-org/react';
import { ButtonProps } from '@react-types/button';
import { PickerSizeTypes } from '@type/styles';

interface PickerProps extends ButtonProps {
  text: string;
  size?: PickerSizeTypes;
}

const Picker = ({ text, size = 'md', ...props }: PickerProps) => {
  const { isFocused, handleFocus } = useFocusTimeout();

  const focusStyles = isFocused
    ? 'focus:bg-secondary-orange focus:border-secondary-orange focus:text-secondary-orange'
    : '';

  const buttonClassName = `${PickerSize[size]} 
  ${FontVariantsClassName.header03} 
    text-gray07
    bg-gray01 
    border-2 
    border-gray02
    focus:bg-opacity-20 
    ${focusStyles}
  `;

  return (
    <Button
      {...props}
      className={buttonClassName}
      color="primary"
      variant="bordered"
      onClick={handleFocus}
    >
      {text}
    </Button>
  );
};

export default Picker;
