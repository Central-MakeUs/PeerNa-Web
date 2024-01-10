import { Progress, ProgressProps } from '@nextui-org/react';

interface ProgressBarProps extends ProgressProps {
  level: number;
  step: number;
  order: number;
  barSize: ProgressBarSizeType;
}

type ProgressBarSizeType = keyof typeof ProgressBarSize;

const ProgressBarSize = {
  short: 'w-[54.5px] h-[4px]',
  long: 'w-[390px]',
};

const ProgressBar = ({ barSize, level, step, order }: ProgressBarProps) => {
  const isDisabled = order > level;
  const value = isDisabled ? 0 : order < level ? 75 : step * 15;

  return (
    <Progress
      value={value}
      maxValue={75}
      radius="none"
      isDisabled={!!isDisabled}
      classNames={{
        base: `${ProgressBarSize[barSize]}`,
        indicator: isDisabled ? 'bg-gray02' : 'bg-secondary-orange',
      }}
    />
  );
};

export default ProgressBar;
