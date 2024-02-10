import { SpinnerProps, Spinner as SpinnerWithNextui } from '@nextui-org/react';

export default function Spinner({ ...props }: SpinnerProps) {
  return <SpinnerWithNextui color="primary" {...props} />;
}
