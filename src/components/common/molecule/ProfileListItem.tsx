import Typography from '@components/common/atom/Typography';
import { cardItem, CardType } from '@constants/card';

interface ProfileListItemProps {
  isMyProfile: boolean;
  testType: CardType;
  username: string;
  position: string;
  score?: number;
  information: string;
  introduce: string;
  children?: React.ReactNode;
}

export default function ProfileListItem({
  isMyProfile,
  testType,
  username,
  position,
  score,
  information,
  introduce,
  children,
}: ProfileListItemProps) {
  return (
    <div
      className={`flex justify-between items-center ${isMyProfile ? 'w-full' : 'w-[524px]'} px-5 mx-auto pt-8 pb-4`}
    >
      <div className="flex gap-3 items-center">
        <div
          className={`!w-[64px] !h-[64px] flex items-center justify-center box-content rounded-full border-1 border-[#E3E6E8] ${isMyProfile ? 'bg-gray07' : 'bg-white'}`}
        >
          <img
            src={cardItem[testType]}
            alt="테스트 결과 카드"
            className="w-[32px] h-[32px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Typography
              variant="body01"
              fontColor={isMyProfile ? 'white' : 'gray08'}
            >
              {username}
            </Typography>
            <Typography variant="caption01" fontColor="primary500">
              {position}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography
              variant="body04"
              fontColor={isMyProfile ? 'gray04' : 'gray07'}
              className="mr-1"
            >
              {information}
            </Typography>
            <span className={`text-${isMyProfile ? 'gray04' : 'gray07'}`}>
              |
            </span>
            <Typography
              variant="body04"
              fontColor={isMyProfile ? 'gray04' : 'gray07'}
              className="ml-1"
            >
              {`종합점수 ${score}점`}
            </Typography>
          </div>
          <Typography variant="body05" fontColor="gray05">
            {introduce}
          </Typography>
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
