import AppScreenContainer from '@components/wrapper/AppScreenContainter';
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
    if (curStep === 2) {
      push('ReviewResultPage', { type: params.type, step: '4' });
      return;
    }
    push('ReviewResultPage', { type: params.type, step: nextStep });
  };

  return (
    <AppScreenContainer className="bg-transparent bg-cover bg-peer-bg px-4">
      {curStep === 1 && <LoadingResult />}
      {curStep === 2 && <ResultGuide />}
      {curStep === 3 && <AnalyzePeerCard handleClick={handleClick} />}
      {curStep === 4 && <ResultShare type={params.type} curStep={curStep} />}
    </AppScreenContainer>
  );
};

export default ReviewResultPage;
