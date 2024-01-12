import { FontVariantsClassName } from '@constants/styles';
import { Chip, ChipProps } from '@nextui-org/react';
import { ReactNode } from 'react';

interface StepProps extends ChipProps {
  children: ReactNode;
  isDisabled?: boolean;
}

const Step = ({ children, isDisabled, ...props }: StepProps) => {
  return (
    <Chip
      {...props}
      className={`${
        isDisabled ? 'bg-gray02' : 'bg-primary400'
      } max-w-none !min-w-unit-0 !min-h-0 !w-[20px] !h-[20px] ${
        FontVariantsClassName.caption01
      } text-white`}
    >
      {children}
    </Chip>
  );
};

export default Step;
