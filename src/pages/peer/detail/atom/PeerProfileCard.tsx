import PeerCard from '@components/common/atom/PeerCard';
import SvgIcon from '@components/common/atom/SvgIcon';
import Talk from '@components/common/atom/Talk';
import Typography from '@components/common/atom/Typography';
import { JOB_MAPPER, PART_MAPPER } from '@constants/mapper';
import { PeerSimpleProfileType } from '@type';
import { JobType, PartType } from '@type/enums';
import { Fragment } from 'react';

export default function PeerProfileCard({
  memberInfo,
}: {
  memberInfo: PeerSimpleProfileType;
}) {
  const totalScore = memberInfo.totalScore;
  const peerType = memberInfo.peerTestType;
  const type = peerType === null ? 'analyze' : undefined;

  return (
    <Fragment>
      <article className="flex flex-col items-center mb-8">
        <PeerCard size="M" testResult={peerType} type={type} />
        <div className="flex justify-center items-center mb-2 gap-2">
          <Typography variant="body04" fontColor="gray06">
            {JOB_MAPPER[memberInfo.job as JobType]}
          </Typography>
          <SvgIcon id="Line" color="gray04" height={10} width={4} />
          <Typography variant="body04" fontColor="gray06">
            {PART_MAPPER[memberInfo.part as PartType]}
          </Typography>
          <SvgIcon id="Line" color="gray04" height={10} width={4} />
          <Typography variant="body04" fontColor="gray06">
            {totalScore > 13 ? `종합점수 ${totalScore}점` : '종합점수 분석중'}
          </Typography>
        </div>
        <Talk type="filled">{memberInfo.oneLiner}</Talk>
      </article>
    </Fragment>
  );
}
