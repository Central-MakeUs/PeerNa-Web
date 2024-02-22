import { SpinnerProps, Spinner as SpinnerWithNextui } from '@nextui-org/react';

export default function Spinner({ ...props }: SpinnerProps) {
  return (
    <div className="flex justify-center m-5">
      <SpinnerWithNextui color="primary" {...props} />
    </div>
  );
}
