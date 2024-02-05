import useFocusTimeout from '@hooks/common/useFocusTimeout';
import { TestType } from "@type/enums";

type AvatarButtonProps = {
  type: TestType;
  handleClick: () => void;
};

export default function AvatarButton({ type, handleClick }: AvatarButtonProps) {
  const { isFocused, handleFocus } = useFocusTimeout();

  const backgroundColor = isFocused ? 'bg-gray02' : 'bg-gray01';

  return (
    <div className="flex justify-center items-center shadow-default w-[105.88px] h-[105.88px] rounded-full">
      <button
        className={`${backgroundColor} bg-${type} w-[100px] h-[100px] flex justify-center items-center 
  rounded-full border-[1.47px] border-[#E3E6E8]`}
        onClick={() => {
          handleFocus();
          handleClick();
        }}
      >
      </button>
    </div>
  );
}
