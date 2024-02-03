import AnalyzePeerCard from '@components/pages/reviewResult/organism/AnalyzePeerCard';
import LoadingResult from '@components/pages/reviewResult/organism/LoadingResult';
import ResultGuide from '@components/pages/reviewResult/organism/ResultGuide';
import ResultShare from '@components/pages/reviewResult/organism/ResultShare';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { useFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';

import gradient from '@assets/gradient.png';
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
    <AppScreenContainer
      className={'bg-transparent bg-cover'}
      style={{ backgroundImage: `url(${gradient})` }}
    >
      {curStep === 1 && <LoadingResult />}
      {curStep === 2 && <ResultGuide />}
      {curStep === 3 && <AnalyzePeerCard handleClick={handleClick} />}
      {curStep === 4 && <ResultShare type={params.type} curStep={curStep} />}
    </AppScreenContainer>
  );
};

export default ReviewResultPage;
