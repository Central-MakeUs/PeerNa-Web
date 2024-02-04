import Card from "@components/common/atom/Card";
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { JOB_MAPPER, PART_MAPPER } from "@constants/mapper";
import { CreatorSimpleProfileType } from "@type/index";

interface ProfileListItemProps extends CreatorSimpleProfileType {
  isMyProfile: boolean;
  children?: React.ReactNode;
}

export default function ProfileListItem({
  isMyProfile,
  peerTestType,
  name,
  part,
  totalScore,
  job,
  oneLiner,
  children,
}: ProfileListItemProps) {
  return (
    <div
      className={`flex flex-1 justify-between items-center ${isMyProfile ? 'w-full' : 'max-w-[524px]'} px-5 mx-auto pt-8 pb-4`}
    >
      <div className="flex gap-3 items-center">
        <div
          className={`!w-[64px] !h-[64px] !bg-gray01 flex items-center justify-center box-content rounded-full border-1 border-[#E3E6E8] ${isMyProfile ? 'bg-gray07' : 'bg-white'}`}
        >
          {peerTestType ? (
            <Card testResult={peerTestType} size="M" type="peer"/>
          ) : (
            <SvgIcon id="Person" width={32} height={32} color="gray04" />
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Typography
              variant="body01"
              fontColor={isMyProfile ? 'white' : 'gray08'}
            >
              {name}
            </Typography>
            <Typography variant="caption01" fontColor="primary500">
              {JOB_MAPPER[job]}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography
              variant="body04"
              fontColor={isMyProfile ? 'gray04' : 'gray07'}
              className="mr-1"
            >
              {PART_MAPPER[part]}
            </Typography>
            <span className={`text-${isMyProfile ? 'gray04' : 'gray07'}`}>
              |
            </span>
            <Typography
              variant="body04"
              fontColor={isMyProfile ? 'gray04' : 'gray07'}
              className="ml-1"
            >
              {totalScore ? `종합점수 ${totalScore}점` : '종합점수 분석중'}
            </Typography>
          </div>
          <Typography variant="body05" fontColor="gray05">
            {oneLiner}
          </Typography>
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
