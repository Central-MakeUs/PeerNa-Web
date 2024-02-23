import { PEER_ICON_LIST } from '@constants/images';
import useFocusTimeout from '@hooks/common/useFocusTimeout';
import { TestType } from '@type/enums';

type AvatarButtonProps = {
  type: TestType;
  handleClick: () => void;
};

export default function AvatarButton({ type, handleClick }: AvatarButtonProps) {
  const { isFocused, handleFocus } = useFocusTimeout();

  const backgroundColor = isFocused ? 'bg-gray02' : 'bg-gray01';

  const bgImage = PEER_ICON_LIST[type];
  return (
    <div className="flex justify-center items-center shadow-default w-[72px] h-[72px] rounded-full">
      <button
        className={`${backgroundColor} flex justify-center items-center w-[68px] h-[68px] bg-44 bg-no-repeat bg-center 
  rounded-full border-1 border-[#E3E6E8]`}
        onClick={() => {
          handleFocus();
          handleClick?.();
        }}
      >
        <img src={bgImage} className="w-11 h-11" />
      </button>
    </div>
  );
}
