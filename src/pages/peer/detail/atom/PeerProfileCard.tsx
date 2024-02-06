import PeerCard from '@components/common/atom/PeerCard';
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
  return (
    <Fragment>
      <article className="flex flex-col items-center mb-8">
        <PeerCard size="M" testResult={peerType} />
        <p className="flex justify-center mb-2">
          <Typography variant="body04" fontColor="gray06">
            {JOB_MAPPER[memberInfo.job as JobType]}
          </Typography>
          <span className="text-gray04 mx-2">|</span>
          <Typography variant="body04" fontColor="gray06">
            {PART_MAPPER[memberInfo.part as PartType]}
          </Typography>
          <span className="text-gray04 mx-2">|</span>
          <Typography variant="body04" fontColor="gray06">
            {totalScore ? `종합점수 ${totalScore}점` : '종합점수 분석중'}
          </Typography>
        </p>
        <Talk type="filled">{memberInfo.oneLiner}</Talk>
      </article>
    </Fragment>
  );
}
