import { SvgIconProps } from '@components/common/atom/SvgIcon';
import useFocusTimeout from '@hooks/useFocusTimeout';
import IconButton from './IconButton';

type AvatarButtonProps = {
  type: string;
};

const AvatarButton = ({ type }: AvatarButtonProps) => {
  const { isFocused, handleFocus } = useFocusTimeout();
  const iconProps: SvgIconProps = {
    id: 'Person',
    width: 28,
    height: 28,
    color: 'gray04',
  };
  const getBackgroundColor = () => {
    if (type === 'default') return isFocused ? 'bg-[#E3E6E8]' : 'bg-[#F6F7F8]';
    if (type === 'orange') return isFocused ? 'bg-[#E85830]' : 'bg-[#FF744D]';
  };
  const backgroundColor = getBackgroundColor();
  const commonIconButtonClasses = `${backgroundColor} w-[68px] h-[68px] flex justify-center items-center 
  rounded-[100px] border-1 border-[#E3E6E8]`;

  return (
    <div className="flex justify-center items-center shadow-default !w-[72px] !h-[72px] rounded-full">
      <IconButton
        onClick={handleFocus}
        iconProps={iconProps}
        className={commonIconButtonClasses}
      />
    </div>
  );
};

export default AvatarButton;
