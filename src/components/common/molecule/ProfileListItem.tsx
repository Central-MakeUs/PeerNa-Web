import Typography from '@components/common/atom/Typography';
import { cardItem, CardType } from '@constants/card';

interface ProfileListItemProps {
  testType: CardType;
  username: string;
  position: string;
  score?: number;
  information: string;
  introduce: string;
  children?: React.ReactNode;
}

export default function ProfileListItem({
  testType,
  username,
  position,
  score,
  information,
  introduce,
  children,
}: ProfileListItemProps) {
  return (
    <div className="flex justify-between items-center h-[44px] px-5 py-4 box-content">
      <div className="flex gap-3">
        <div
          className={`w-[24px] h-[24px] p-3 box-content rounded-full ${'bg-gray01'}`}
        >
          <img src={cardItem[testType]} alt="테스트 결과 카드" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Typography variant="body01" fontColor="white">
              {username}
            </Typography>
            <Typography variant="caption01" className="text-primary500">
              {position}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography variant="body05" className="text-gray04 mr-1">
              {information}
            </Typography>
            <span className="text-gray04">|</span>
            <Typography variant="caption01" className="text-gray04 ml-1">
              {` 종합점수 ${score}점`}
            </Typography>
          </div>
          <Typography variant="body05" className="text-gray05">
            {introduce}
          </Typography>
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
