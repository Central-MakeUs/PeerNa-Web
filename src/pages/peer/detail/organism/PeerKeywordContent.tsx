import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import { PeerProfileResponseDTO } from '@hooks/api/home/peerId/useGetPeerDetail';
import Feedback from '@pages/mypage/index/molecule/Feedback';
import NoTestKeywordResult from '@pages/mypage/index/molecule/NoTestKeywordResult';
import OverallOpinion from '@pages/mypage/index/molecule/OverallOpinion';
import OverallScore from '@pages/mypage/index/molecule/OverallScore';
import OverallTestResult from '@pages/mypage/index/molecule/OverallTestResult';
import ProjectList from '@pages/peer/detail/molecule/ProjectList';
import { Fragment } from 'react';

type KeywordProps = {
  data: PeerProfileResponseDTO;
  handleMoreFeedback: () => void;
  handleMoreProject: () => void;
};

export default function PeerKeywordContent({
  data,
  handleMoreFeedback,
  handleMoreProject,
}: KeywordProps) {
  const {
    colorAnswerIdList,
    peerTestMoreThanThree,
    peerAnswerIdList,
    peerCardList,
    totalEvaluation,
    totalScore,
    peerFeedbackList,
    peerProjectDtoList,
  } = data;
  return (
    <Fragment>
      <ErrorBoundaryWithSuspense>
        {peerAnswerIdList && colorAnswerIdList.length > 0 && (
          <OverallTestResult
            colorAnswerIdList={colorAnswerIdList}
            selfTestAnswerIdList={peerAnswerIdList}
            peerCardList={peerCardList}
            type="peer"
          />
        )}
      </ErrorBoundaryWithSuspense>
      {colorAnswerIdList.length === 0 && <NoTestKeywordResult type="peer" />}{' '}
      <ErrorBoundaryWithSuspense>
        {Array.isArray(totalEvaluation) && totalEvaluation.length > 0 && (
          <OverallOpinion totalEvaluation={totalEvaluation} />
        )}
      </ErrorBoundaryWithSuspense>
      {peerTestMoreThanThree && <OverallScore totalScore={totalScore} />}
      {peerFeedbackList.length > 0 && (
        <Feedback
          peerFeedbackList={peerFeedbackList}
          handleClick={handleMoreFeedback}
        />
      )}
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
