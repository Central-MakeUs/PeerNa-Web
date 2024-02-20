import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import { PeerProfileResponseDTO } from '@hooks/api/home/peerId/useGetPeerDetail';
import { Spacer } from '@nextui-org/react';
import Feedback from '@pages/mypage/index/molecule/Feedback';
import OverallOpinion from '@pages/mypage/index/molecule/OverallOpinion';
import OverallScore from '@pages/mypage/index/molecule/OverallScore';
import PeerTestResult from '@pages/peer/detail/atom/PeerTestResult';
import SelfTestResult from '@pages/peer/detail/atom/SelfTestResult';
import ProjectList from '@pages/peer/detail/molecule/ProjectList';
import { Fragment } from 'react';

type PeerCardContentProps = {
  data: PeerProfileResponseDTO;
  handleMoreFeedback: () => void;
  handleMoreProject: () => void;
};

export default function PeerCardContent({
  data,
  handleMoreFeedback,
  handleMoreProject,
}: PeerCardContentProps) {
  const {
    peerCardList,
    myCardList,
    myName,
    memberSimpleProfileDto,
    totalEvaluation,
    peerTestMoreThanThree,
    totalScore,
    peerFeedbackList,
    peerProjectDtoList,
  } = data;
  const username = memberSimpleProfileDto.name;
  console.log(data);
  return (
    <Fragment>
      <ErrorBoundaryWithSuspense>
        <PeerTestResult user={username} peerCardList={peerCardList} />
      </ErrorBoundaryWithSuspense>
      <ErrorBoundaryWithSuspense>
        <SelfTestResult myName={myName} myCardList={myCardList} />
      </ErrorBoundaryWithSuspense>
      <Spacer y={8} />
      <ErrorBoundaryWithSuspense>
        {Array.isArray(totalEvaluation) && peerTestMoreThanThree && (
          <OverallOpinion totalEvaluation={totalEvaluation} />
        )}
      </ErrorBoundaryWithSuspense>
      <ErrorBoundaryWithSuspense>
        {peerTestMoreThanThree && <OverallScore totalScore={totalScore} />}
      </ErrorBoundaryWithSuspense>
      <ErrorBoundaryWithSuspense>
        {peerTestMoreThanThree && (
          <Feedback
            peerFeedbackList={peerFeedbackList}
            handleClick={handleMoreFeedback}
          />
        )}
      </ErrorBoundaryWithSuspense>
      <ErrorBoundaryWithSuspense>
        {peerProjectDtoList && (
          <ProjectList
            projectList={peerProjectDtoList}
            handleClick={handleMoreProject}
          />
        )}
      </ErrorBoundaryWithSuspense>
    </Fragment>
  );
}
