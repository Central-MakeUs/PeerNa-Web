import {
  Progress as ProgressWithNextui,
  ProgressProps as ProgressPropsWithNextui,
} from '@nextui-org/react';

interface ProgressTrackProps extends ProgressPropsWithNextui {
  level: number;
  step: number;
  order: number;
  barSize: ProgressBarSizeType;
}

type ProgressBarSizeType = keyof typeof ProgressBarSize;

const ProgressBarSize = {
  short: '!w-[54.5px] h-2',
  long: '!w-[390px] h-2',
};

const ProgressTrack = ({
  barSize = 'short',
  level,
  step,
  order,
  ...props
}: ProgressTrackProps) => {
  const isDisabled = order > level;
  const value = isDisabled ? 0 : order < level ? 75 : step * 15;

  return (
    <ProgressWithNextui
      value={value}
      radius="none"
      isDisabled={isDisabled}
      classNames={{
        base: ProgressBarSize[barSize],
        indicator: isDisabled ? 'bg-gray02' : 'bg-secondary-orange',
      }}
      {...props}
    />
  );
};

export default ProgressTrack;
