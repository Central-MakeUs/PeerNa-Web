import Typography from '@components/common/atom/Typography';
import { cardItem, CardType } from '@constants/card';
import { JOB_LIST, PART_LIST } from '@constants/member';
import { getPartJobTitle } from '@utils/getTitleValue';
import { JobType, PartType } from '@constants/member';
import SvgIcon from '../atom/SvgIcon';

interface ProfileListItemProps {
  isMyProfile: boolean;
  testType: CardType;
  username: string;
  part: PartType;
  score: number;
  job: JobType;
  introduce: string;
  children?: React.ReactNode;
}

export default function ProfileListItem({
  isMyProfile,
  testType,
  username,
  part,
  score,
  job,
  introduce,
  children,
}: ProfileListItemProps) {
  return (
    <div
      className={`flex flex-1 justify-between items-center ${isMyProfile ? 'w-full' : 'max-w-[524px]'} px-5 mx-auto pt-8 pb-4`}
    >
      <div className="flex gap-3 items-center">
        <div
          className={`!w-[64px] !h-[64px] bg-white flex items-center justify-center box-content rounded-full border-1 border-[#E3E6E8] ${isMyProfile ? 'bg-gray07' : 'bg-white'}`}
        >
          {testType ? (
            <img
              src={cardItem[testType]}
              alt="테스트 결과 카드"
              className="w-[32px] h-[32px]"
            />
          ) : (
            <SvgIcon id="Person" width={32} height={32} />
          )}
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
              {getPartJobTitle(part, PART_LIST)}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography
              variant="body04"
              fontColor={isMyProfile ? 'gray04' : 'gray07'}
              className="mr-1"
            >
              {getPartJobTitle(job, JOB_LIST)}
            </Typography>
            <span className={`text-${isMyProfile ? 'gray04' : 'gray07'}`}>
              |
            </span>
            <Typography
              variant="body04"
              fontColor={isMyProfile ? 'gray04' : 'gray07'}
              className="ml-1"
            >
              {score ? `종합점수 ${score}점` : '종합점수 분석중'}
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
