import { SpinnerProps, Spinner as SpinnerWithNextui } from '@nextui-org/react';

const Spinner = ({ ...props }: SpinnerProps) => {
  return <SpinnerWithNextui color="primary" {...props} />;
};

export default Spinner;
