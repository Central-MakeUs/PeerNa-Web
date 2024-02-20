import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import { MyPageResponseDTO } from '@hooks/api/member/index/useGetMypageInfo';
import Feedback from '@pages/mypage/index/molecule/Feedback';
import NoPeerTestResult from '@pages/mypage/index/molecule/NoPeerTestResult';
import OverallOpinion from '@pages/mypage/index/molecule/OverallOpinion';
import OverallScore from '@pages/mypage/index/molecule/OverallScore';
import PeerTestResult from '@pages/mypage/index/molecule/PeerTestResult';
import SelfTestResult from '@pages/mypage/index/molecule/SelfTestResult';
import { Fragment } from 'react';

type CardContentProps = {
  data: MyPageResponseDTO;
  handleClick: () => void;
};

export default function CardContent({ data, handleClick }: CardContentProps) {
  const {
    peerTestMoreThanThree,
    selfTestCardList,
    peerCardList,
    totalEvaluation,
    totalScore,
    peerFeedbackList,
  } = data;

  return (
    <Fragment>
      <ErrorBoundaryWithSuspense>
        {selfTestCardList && (
          <SelfTestResult selfTestCardList={selfTestCardList} />
        )}
      </ErrorBoundaryWithSuspense>
      <ErrorBoundaryWithSuspense>
        {peerCardList.length > 0 && (
          <PeerTestResult peerCardList={peerCardList} />
        )}
      </ErrorBoundaryWithSuspense>
      {peerCardList.length === 0 && <NoPeerTestResult />}
      <ErrorBoundaryWithSuspense>
        {Array.isArray(totalEvaluation) && totalEvaluation.length > 0 && (
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
            handleClick={handleClick}
          />
        )}
      </ErrorBoundaryWithSuspense>
    </Fragment>
  );
}
