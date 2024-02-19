import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import { useFlow } from '@hooks/common/useStackFlow';
import AnalyzePeerCard from '@pages/review/result/organism/AnalyzePeerCard';
import LoadingResult from '@pages/review/result/organism/LoadingResult';
import ResultGuide from '@pages/review/result/organism/ResultGuide';
import ResultShare from '@pages/review/result/organism/ResultShare';
import { ActivityComponentType } from '@stackflow/react';

type ReviewResultPageParams = {
  type: string;
  step: string;
};

const ReviewResultPage: ActivityComponentType<ReviewResultPageParams> = ({
  params,
}) => {
  const { push } = useFlow();
  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);

  const handleClick = () => {
    push('ReviewResultPage', { type: params.type, step: nextStep });
  };

  const bgGradient = curStep === 4 ? 'bg-peer-bg' : '';

  return (
    <AppScreenContainer
      className={`bg-transparent bg-cover ${bgGradient} px-4`}
    >
      {curStep === 1 && (
        <ErrorBoundaryWithSuspense>
          <LoadingResult />
        </ErrorBoundaryWithSuspense>
      )}
      {curStep === 2 && (
        <ErrorBoundaryWithSuspense>
          <ResultGuide />
        </ErrorBoundaryWithSuspense>
      )}
      {curStep === 3 && (
        <ErrorBoundaryWithSuspense>
          <AnalyzePeerCard handleClick={handleClick} />
        </ErrorBoundaryWithSuspense>
      )}
      {curStep === 4 && (
        <ErrorBoundaryWithSuspense>
          <ResultShare type={params.type} curStep={curStep} />
        </ErrorBoundaryWithSuspense>
      )}
    </AppScreenContainer>
  );
};

export default ReviewResultPage;
