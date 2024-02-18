import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { ICON_MAPPER, JOB_MAPPER, PART_MAPPER } from '@constants/mapper';
import { CreatorSimpleProfileType } from '@type/index';

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
  const peerType = ICON_MAPPER[peerTestType];
  return (
    <div
      className={`flex flex-1 gap-2 justify-between items-center ${isMyProfile ? 'w-full' : 'max-w-[524px]'} px-5 mx-auto pt-8 pb-4`}
    >
      <div className="flex gap-2 items-center w-[239px]">
        <div
          className={`max-w-[64px] min-w-12 max-h-[64px] min-h-12 !bg-gray01 flex items-center justify-center box-content rounded-full border-1 border-[#E3E6E8] ${isMyProfile ? 'bg-gray07' : 'bg-white'}`}
        >
          {peerTestType && (
            <div
              className={`${peerType} w-8 h-8 bg-no-repeat bg-center bg-32`}
            />
          )}
          {!peerTestType && (
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
            <Typography
              variant="caption01"
              fontColor="primary500"
              className="!whitespace-nowrap"
            >
              {JOB_MAPPER[job]}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography
              variant="body04"
              fontColor={isMyProfile ? 'gray04' : 'gray07'}
              className="!whitespace-nowrap after:content-['|'] after:ml-1"
            >
              {PART_MAPPER[part]}
            </Typography>
            <Typography
              variant="body04"
              fontColor={isMyProfile ? 'gray04' : 'gray07'}
              className="!whitespace-nowrap before:mr-1"
            >
              {totalScore > 1 ? `종합점수 ${totalScore}점` : '종합점수 분석중'}
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
