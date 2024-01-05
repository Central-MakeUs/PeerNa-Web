import { FontVariantsClassName, Palette, PickerSize } from '@constants/styles';
import { Button } from '@nextui-org/react';
import { ButtonProps } from '@react-types/button';
import { useEffect, useState } from 'react';
import { ColorTypes, FontVariantsKeys, PickerSizeTypes } from 'types/styles';

interface PickerProps extends ButtonProps {
  text: string;
  size?: PickerSizeTypes;
  fontVariant?: FontVariantsKeys;
  fontColor?: ColorTypes;
  borderColor?: ColorTypes;
}

const Picker = ({
  text,
  size = 'md',
  fontVariant = 'header03',
  fontColor = 'gray07',
  borderColor = 'danger01',
  ...props
}: PickerProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);

  useEffect(() => {
    let focusTimeout: NodeJS.Timeout;
    if (isFocused) focusTimeout = setTimeout(() => setIsFocused(false), 500);
    return () => clearTimeout(focusTimeout);
  }, [isFocused]);

  return (
    <Button
      className={`
      ${PickerSize[size]}
      ${FontVariantsClassName[fontVariant]}
      text-[${Palette[fontColor]}]
      border-2
      border-[${Palette[borderColor]}] 
      focus:bg-opacity-20
      ${
        isFocused
          ? 'focus:bg-secondary-orange focus:border-secondary-orange focus:text-secondary-orange'
          : ''
      }
    `}
      color="primary"
      onClick={handleFocus}
      {...props}
    >
      {text}
    </Button>
  );
};

export default Picker;
