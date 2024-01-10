import {
  Avatar as AvatorWithNextui,
  AvatarProps as AvatorPropsWithNextui,
} from '@nextui-org/react';

interface ProgressStepProps extends AvatorPropsWithNextui {
  level: number;
  step?: number;
  icon?: React.ReactElement;
}

const ProgressStep = ({ name, level, step, icon }: ProgressStepProps) => {
  const isComplete = level === 4 && step === 5;
  const isDisabled = name ? level < parseInt(name, 10) : !isComplete;

  return (
    <AvatorWithNextui
      name={icon ? '' : name}
      icon={icon}
      className={`w-5 h-5 text-white text-sm ${
        isDisabled ? 'bg-gray02' : 'bg-secondary-orange'
      }`}
    />
  );
};

export default ProgressStep;
