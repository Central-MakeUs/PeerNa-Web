import useFocusTimeout from '@hooks/useFocusTimeout';
import { CardType, cardItem } from '@constants/card';

type AvatarButtonProps = {
  type: CardType;
  handleClick: () => void;
};

export default function AvatarButton({ type, handleClick }: AvatarButtonProps) {
  const { isFocused, handleFocus } = useFocusTimeout();

  const backgroundColor = isFocused ? 'bg-gray02' : 'bg-gray01';

  return (
    <div className="flex justify-center items-center shadow-default !w-[105.88px] !h-[105.88px] rounded-full">
      <button
        className={`${backgroundColor} w-[100px] h-[100px] flex justify-center items-center 
  rounded-full border-1 border-[#E3E6E8]`}
        onClick={() => {
          handleFocus();
          handleClick();
        }}
      >
        <img
          src={cardItem[type]}
          alt="테스트 카드"
          className="w-[64.71px] h-[64.71px]"
        />
      </button>
    </div>
  );
}
