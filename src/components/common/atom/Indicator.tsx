import {
  Avatar,
  AvatarProps as AvatorPropsWithNextui,
} from '@nextui-org/react';

interface IndicatorProps extends AvatorPropsWithNextui {
  level: number;
  step?: number;
  icon?: React.ReactElement;
}

const Indicator = ({ name, level, step, icon }: IndicatorProps) => {
  const isComplete = level === 4 && step === 5;
  const isDisabled = name ? level < parseInt(name, 10) : !isComplete;

  return (
    <Avatar
      name={icon ? '' : name}
      icon={icon}
      className={`w-5 h-5 text-white text-sm ${
        isDisabled ? 'bg-gray02' : 'bg-secondary-orange'
      }`}
    />
  );
};

export default Indicator;
