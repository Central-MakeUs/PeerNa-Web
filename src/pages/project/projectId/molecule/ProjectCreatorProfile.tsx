import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { ICON_MAPPER, JOB_MAPPER, PART_MAPPER } from '@constants/mapper';
import { useFlow } from '@hooks/common/useStackFlow';
import { PeerSimpleProfileType } from '@type';

export default function ProjectCreatorProfile({
  memberId,
  peerTestType,
  name,
  job,
  part,
  oneLiner,
  totalScore,
}: PeerSimpleProfileType) {
  const { push } = useFlow();
  const handleClickDetail = () =>
    push('PeerDetailPage', { memberId: String(memberId) });

  const peerType = ICON_MAPPER[peerTestType];

  return (
    <div className="w-full flex justify-between items-center px-5 py-4">
      <div className="flex gap-3">
        <div className="w-[30px] h-[30px] p-3 flex items-center justify-center box-content rounded-full bg-gray01">
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
            <Typography variant="header03" fontColor="gray08">
              {name}
            </Typography>
            <Typography variant="caption01" className="text-primary500">
              {PART_MAPPER[part]}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography variant="body04" className="text-gray07 mr-1">
              {JOB_MAPPER[job]}
            </Typography>
            <span className="text-gray04">|</span>
            <Typography variant="body04" className="text-gray07 ml-1">
              {totalScore > 13 ? `종합점수 ${totalScore}점` : '종합점수 분석중'}
            </Typography>
          </div>
          <Typography variant="body05" className="text-gray05">
            {oneLiner}
          </Typography>
        </div>
      </div>
      <div className="h-full flex items-center">
        <Button
          buttonVariant="tertiary"
          buttonSize="sm"
          onClick={handleClickDetail}
        >
          <Typography
            variant="body03"
            fontColor="gray08"
            className="!whitespace-nowrap"
          >
            자세히
          </Typography>
        </Button>
      </div>
    </div>
  );
}
