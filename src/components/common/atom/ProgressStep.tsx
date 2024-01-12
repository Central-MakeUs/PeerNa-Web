import {
  Avatar as AvatarWithNextui,
  AvatarProps as AvatarPropsWithNextui,
} from '@nextui-org/react';

interface ProgressStepProps extends AvatarPropsWithNextui {
  step: number;
  icon?: React.ReactElement;
  complete?: boolean;
}

const ProgressStep = ({
  name,
  step,
  icon,
  complete,
  ...props
}: ProgressStepProps) => {
  /**
   * @description
   * 현재 스탭이 아닌 다음 스탭은 isDisabled으로 색상구분
   */
  const isDisabled = name ? step < parseInt(name, 10) : !complete;

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
