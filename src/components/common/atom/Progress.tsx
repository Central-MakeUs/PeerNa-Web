import {
  ProgressProps as ProgressPropsWithNextui,
  Progress as ProgressWithNextui,
} from '@nextui-org/react';

export interface ProgressProps extends ProgressPropsWithNextui {
  curStep: number;
  lastStep: number;
}

export default function Progress({
  curStep,
  lastStep,
  ...props
}: ProgressProps) {
  const value = (100 / lastStep) * curStep;
  return (
    <ProgressWithNextui
      {...props}
      value={value}
      radius="none"
      classNames={{
        base: '!w-full !h-[4px]',
        track: 'bg-secondary-orange/20',
        indicator: 'bg-secondary-orange',
      }}
    />
  );
}
