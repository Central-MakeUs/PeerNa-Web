import {
  Progress as ProgressWithNextui,
  ProgressProps as ProgressPropsWithNextui,
} from '@nextui-org/react';

export interface ProgressTrackProps extends ProgressPropsWithNextui {
  step: number;
  trackStep: number;
  order?: number;
  barSize?: ProgressBarSizeType;
}

type ProgressBarSizeType = keyof typeof ProgressBarSize;

const ProgressBarSize = {
  short: '!w-[54.5px] h-2',
  long: '!w-[390px] h-2',
};

/**
 * @description
 * 두번째 스탭과 세번째 스탭은 4의 간격으로, interval 25
 * 첫번째 스탭과 마지막 스탭은 5의 간격으로, interval 20
 *
 * 다음 스탭은 value 0으로, 이전 스탭은 value 100으로
 * 현재 스탭은 trackStep의 interval만큼의 value
 */

const ProgressTrack = ({
  barSize = 'short',
  step,
  trackStep,
  order = 1,
  ...props
}: ProgressTrackProps) => {
  const nextStep = order > step;
  const prevStep = order < step;

  const interval = step === 2 || step === 3 ? 25 : 20;

  const value = nextStep ? 0 : prevStep ? 100 : trackStep * interval;

  return (
    <ProgressWithNextui
      {...props}
      value={value}
      radius="none"
      isDisabled={nextStep}
      classNames={{
        base: ProgressBarSize[barSize],
        track: nextStep ? 'bg-gray02' : 'bg-secondary-orange/20',
        indicator: 'bg-secondary-orange',
      }}
    />
  );
};

export default ProgressTrack;
