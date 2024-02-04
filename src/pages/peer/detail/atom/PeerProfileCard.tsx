import { ProfileCardInfo } from '@/hooks/api/home/peerId/useGetPeerDetail';
import peerCard from '@assets/peerCard.png';
import Talk from '@components/common/atom/Talk';
import Typography from '@components/common/atom/Typography';
import { JOB_LIST, PART_LIST } from '@constants/member';
import { getPartJobTitle } from '@utils/getTitleValue';
import { Fragment } from 'react';

export default function PeerProfileCard({
  memberInfo,
}: {
  memberInfo: ProfileCardInfo;
}) {
  const totalScore = memberInfo.totalScore;
  const peerType = memberInfo.peerTestType;
  console.log(peerType);
  return (
    <Fragment>
      <article className="flex flex-col items-center mb-8">
        <img
          src={peerCard}
          alt="동료카드"
          className="w-[171px] h-[238px] mb-3"
        />
        <p className="flex justify-center mb-2">
          <Typography variant="body04" fontColor="gray06">
            {getPartJobTitle(memberInfo.job, JOB_LIST)}
          </Typography>
          <span className="text-gray04 mx-2">|</span>
          <Typography variant="body04" fontColor="gray06">
            {getPartJobTitle(memberInfo.part, PART_LIST)}
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
