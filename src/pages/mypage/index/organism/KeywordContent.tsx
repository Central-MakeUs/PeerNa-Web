import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import { MyPageResponseDTO } from '@hooks/api/member/index/useGetMypageInfo';
import Feedback from '@pages/mypage/index/molecule/Feedback';
import NoTestKeywordResult from '@pages/mypage/index/molecule/NoTestKeywordResult';
import OverallOpinion from '@pages/mypage/index/molecule/OverallOpinion';
import OverallScore from '@pages/mypage/index/molecule/OverallScore';
import OverallTestResult from '@pages/mypage/index/molecule/OverallTestResult';
import { Fragment } from 'react';

type KeywordProps = {
  data: MyPageResponseDTO;
  handleClick: () => void;
};

export default function KeywordContent({ data, handleClick }: KeywordProps) {
  const {
    colorAnswerIdList,
    selfTestAnswerIdList,
    peerCardList,
    totalEvaluation,
    totalScore,
    peerFeedbackList,
  } = data;
  return (
    <Fragment>
      <ErrorBoundaryWithSuspense>
        {colorAnswerIdList.length > 0 && selfTestAnswerIdList.length > 0 && (
          <OverallTestResult
            colorAnswerIdList={colorAnswerIdList}
            selfTestAnswerIdList={selfTestAnswerIdList}
            peerCardList={peerCardList}
            type="self"
          />
        )}
      </ErrorBoundaryWithSuspense>
      {colorAnswerIdList.length === 0 && <NoTestKeywordResult type="self" />}
      <ErrorBoundaryWithSuspense>
        {Array.isArray(totalEvaluation) && totalEvaluation.length > 0 && (
          <OverallOpinion totalEvaluation={totalEvaluation} />
        )}
      </ErrorBoundaryWithSuspense>
      {totalScore && <OverallScore totalScore={totalScore} />}
      {peerFeedbackList.length > 0 && (
        <Feedback
          peerFeedbackList={peerFeedbackList}
          handleClick={handleClick}
        />
      )}
    </Fragment>
  );
}
