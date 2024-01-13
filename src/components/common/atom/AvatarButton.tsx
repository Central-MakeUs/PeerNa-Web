import IconButton from './IconButton';
import { useState, useEffect } from 'react';

type AvatarButtonProps = {
  type: string;
};

const AvatarButton = ({ type }: AvatarButtonProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);

  useEffect(() => {
    let focusTimeout: NodeJS.Timeout;
    if (isFocused) focusTimeout = setTimeout(() => setIsFocused(false), 500);
    return () => clearTimeout(focusTimeout);
  }, [isFocused]);

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
