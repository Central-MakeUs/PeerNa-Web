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
    <div className="flex justify-center items-center shadow-default tablet:w-[105.88px] tablet:h-[105.88px] mobile:w-[72px] mobile:h-[72px] rounded-full">
      <button
        className={`${backgroundColor} ${bgImage} tablet:w-[100px] tablet:h-[100px] mobile:w-[68px] mobile:h-[68px] tablet:bg-68 mobile:bg-44 bg-no-repeat bg-center 
  rounded-full border-1 border-[#E3E6E8]`}
        onClick={() => {
          handleFocus();
          handleClick?.();
        }}
      ></button>
    </div>
  );
}
