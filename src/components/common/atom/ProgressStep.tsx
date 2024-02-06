import {
  AvatarProps as AvatarPropsWithNextui,
  Avatar as AvatarWithNextui,
} from '@nextui-org/react';

interface ProgressStepProps extends AvatarPropsWithNextui {
  step: number;
  icon?: React.ReactElement;
  complete: boolean;
}

export default function ProgressStep({
  name,
  step,
  icon,
  complete,
  ...props
}: ProgressStepProps) {
  /**
   * @description
   * 현재 스탭이 아닌 다음 스탭은 isDisabled으로 색상구분
   */
  const isDisabled = name ? step < parseInt(name, 10) : !complete;
  return (
    <AvatarWithNextui
      name={icon ? '' : name}
      icon={icon}
      classNames={{
        base: 'w-5 h-5',
      }}
      className={`text-white text-sm ${
        isDisabled ? 'bg-gray02' : 'bg-secondary-orange'
      }`}
      {...props}
    />
  );
}
