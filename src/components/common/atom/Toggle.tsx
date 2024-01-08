import { Switch, SwitchProps } from '@nextui-org/react';

interface ToggleProps extends SwitchProps {
  isDisabled?: boolean;
}

const Toggle = ({ isDisabled, ...props }: ToggleProps) => {
  return (
    <Switch
      {...props}
      isDisabled={isDisabled}
      classNames={{
        wrapper: `!bg-gray07 group-data-[selected=true]:!bg-secondary-orange ${
          isDisabled && '!bg-gray02'
        }`,
        thumb: `${isDisabled && '!bg-gray08'}`,
      }}
    />
  );
};

export default Toggle;
