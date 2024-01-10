import {
  Avatar as AvatarWithNextui,
  AvatarProps as AvatarPropsWithNextui,
} from '@nextui-org/react';

interface ProgressStepProps extends AvatarPropsWithNextui {
  level: number;
  icon?: React.ReactElement;
  complete?: boolean;
}

const ProgressStep = ({
  name,
  level,
  icon,
  complete,
  ...props
}: ProgressStepProps) => {
  const isDisabled = name ? level < parseInt(name, 10) : !complete;

  return (
    <AvatarWithNextui
      name={icon ? '' : name}
      icon={icon}
      className={`w-5 h-5 text-white text-sm ${
        isDisabled ? 'bg-gray02' : 'bg-secondary-orange'
      }`}
      {...props}
    />
  );
};

export default ProgressStep;
