import useFocusTimeout from '@hooks/useFocusTimeout';
import IconButton from './IconButton';

type AvatarButtonProps = {
  type: string;
};

const AvatarButton = ({ type }: AvatarButtonProps) => {
  const { isFocused, handleFocus } = useFocusTimeout();

  return (
    <div className="flex justify-center items-center shadow-default !w-[72px] !h-[72px] rounded-full">
      {type === 'default' && (
        <IconButton
          onClick={handleFocus}
          iconProps={{
            id: 'Person',
            width: 28,
            height: 28,
            color: 'gray04',
          }}
          className={`${
            isFocused ? 'bg-[#E3E6E8]' : 'bg-[#F6F7F8]'
          } w-[68px] h-[68px] flex justify-center items-center 
    rounded-[100px] border-1 border-[#E3E6E8]`}
        />
      )}
      {type === 'orange' && (
        <IconButton
          onClick={handleFocus}
          iconProps={{
            id: 'Person',
            width: 28,
            height: 28,
            color: 'white',
          }}
          className={`${
            isFocused ? 'bg-[#E85830]' : 'bg-[#FF744D]'
          } w-[68px] h-[68px] flex justify-center items-center 
    rounded-[100px] border-1 border-[#E3E6E8]`}
        />
      )}
    </div>
  );
};

export default AvatarButton;
