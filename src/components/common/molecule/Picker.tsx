import { FontVariantsClassName, Palette } from '@constants/styles';
import { Button } from '@nextui-org/react';
import { PickerSize } from '@constants/styles';
import { PickerTypes } from 'types/styles';

type PickerProps = {
  text: string;
  variant: PickerTypes;
};

const Picker = ({ text, variant }: PickerProps) => {
  return (
    <Button
      className={`
      ${PickerSize[variant]} 
      ${FontVariantsClassName['header03']}
      text-[${Palette['gray07']}]
      bg-[${Palette['gray01']}] border-1
      border-[${Palette['gray02']}]
    focus:bg-secondary-orange focus:border-secondary-orange
    focus:text-secondary-orange focus:bg-opacity-20
    `}
    >
      {text}
    </Button>
  );
};

export default Picker;
