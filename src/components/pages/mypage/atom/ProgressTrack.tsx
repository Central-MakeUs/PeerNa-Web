import { Progress as ProgressWithNextui } from '@nextui-org/react';

export default function ProgressTrack({ totalScore }: { totalScore: number }) {
  return (
    <ProgressWithNextui
      value={totalScore}
      radius="sm"
      classNames={{
        base: '!w-[488px] !h-[12px]',
        track: 'bg-secondary-orange/20',
        indicator: 'bg-secondary-orange',
      }}
    />
  );
}
