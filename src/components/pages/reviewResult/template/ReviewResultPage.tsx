import AnalyzePeerCard from '@components/pages/reviewResult/organism/AnalyzePeerCard';
import LoadingResult from '@components/pages/reviewResult/organism/LoadingResult';
import ResultLoginRequired from '@components/pages/reviewResult/organism/ResultLoginRequired';
import ResultShare from '@components/pages/reviewResult/organism/ResultShare';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { useFlow } from '@hooks/useStackFlow';
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

  const bgColor =
    curStep > 1
      ? `bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300`
      : 'bg-transparent';

  return (
    <AppScreenContainer className={bgColor}>
      {curStep === 1 && <LoadingResult />}
      {curStep === 2 && <AnalyzePeerCard handleClick={handleClick} />}
      {curStep === 3 && <ResultLoginRequired handleClick={handleClick} />}
      {curStep === 4 && <ResultShare type={params.type} curStep={curStep} />}
    </AppScreenContainer>
  );
};

export default ReviewResultPage;
