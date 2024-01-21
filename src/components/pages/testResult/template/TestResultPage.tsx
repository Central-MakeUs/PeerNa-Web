import AnalyzePeerCard from '@components/pages/testResult/organism/AnalyzePeerCard';
import LoadingResult from '@components/pages/testResult/organism/LoadingResult';
import ResultShare from '@components/pages/testResult/organism/ResultShare';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { useFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';
import { Fragment } from 'react';

type TestResultPageParams = {
  type: string;
  step: string;
};

const TestResultPage: ActivityComponentType<TestResultPageParams> = ({
  params,
}) => {
  const { push } = useFlow();
  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);

  const handleClick = () => {
    push('TestResultPage', { type: params.type, step: nextStep });
  };

  const bgColor =
    curStep > 2
      ? `bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300`
      : 'bg-transparent';

  return (
    <AppScreenContainer className={bgColor}>
      {curStep === 1 && <LoadingResult curStep={curStep} />}
      {curStep === 2 && (
        <Fragment>
          <AnalyzePeerCard handleClick={handleClick} />
        </Fragment>
      )}
      {curStep === 3 && (
        <Fragment>
          <ResultShare type={params.type} curStep={curStep} />
        </Fragment>
      )}
    </AppScreenContainer>
  );
};

export default TestResultPage;
