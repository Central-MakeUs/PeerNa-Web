import { ICON_MAPPER } from '@constants/mapper';
import useFocusTimeout from '@hooks/common/useFocusTimeout';
import { TestType } from '@type/enums';

type AvatarButtonProps = {
  type: TestType;
  handleClick: () => void;
};

export default function AvatarButton({ type, handleClick }: AvatarButtonProps) {
  const { isFocused, handleFocus } = useFocusTimeout();

  const backgroundColor = isFocused ? 'bg-gray02' : 'bg-gray01';

  const bgImage = ICON_MAPPER[type];
  //TODO) 반응형으로 구현할 것
  return (
    <div className="flex justify-center items-center shadow-default w-[72px] h-[72px] rounded-full">
      <button
        className={`${backgroundColor} ${bgImage} w-[68px] h-[68px] bg-44 bg-no-repeat bg-center 
  rounded-full border-1 border-[#E3E6E8]`}
        onClick={() => {
          handleFocus();
          handleClick?.();
        }}
      ></button>
    </div>
  );
}
