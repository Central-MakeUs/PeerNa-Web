import {
  ProgressProps as ProgressPropsWithNextui,
  Progress as ProgressWithNextui,
} from '@nextui-org/react';

export interface ProgressTrackProps extends ProgressPropsWithNextui {
  step: number;
  trackStep: number;
  maxStep: number; // 추가된 최대 step 프로퍼티
  order?: number;
  barSize?: ProgressBarSizeType;
}

type ProgressBarSizeType = keyof typeof ProgressBarSize;

const ProgressBarSize = {
  short: 'max-w-[133px] !h-[4px]',
  long: '!w-[390px] !h-[4px]',
};

/**
 * @description
 * 두번째 스탭과 세번째 스탭은 4의 간격으로, interval 25
 * 첫번째 스탭과 마지막 스탭은 5의 간격으로, interval 20
 *
 * 다음 스탭은 value 0으로, 이전 스탭은 value 100으로
 * 현재 스탭은 trackStep의 interval만큼의 value
 */

export default function ProgressTrack({
  barSize = 'short',
  step,
  trackStep,
  maxStep,
  order = 1,
  ...props
}: ProgressTrackProps) {
  const nextStep = order > step;
  const prevStep = order < step;

  // interval 계산을 maxStep에 따라 동적으로 조정
  const interval = 100 / maxStep;

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
        indicator: 'bg-primary400',
      }}
    />
  );
}
