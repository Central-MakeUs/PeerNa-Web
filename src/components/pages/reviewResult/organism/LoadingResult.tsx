import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment, useEffect } from 'react';

interface LoadingResultProps {
  curStep: number;
}

export default function LoadingResult({ curStep }: LoadingResultProps) {
  const { push } = useFlow();
  const nextStep = String(curStep + 1);

  useEffect(() => {
    if (curStep === 1) {
      setTimeout(() => {
        push('ReviewResultPage', { type: 'self', step: nextStep });
      }, 1500);
    }
  }, []);

  return (
    <Fragment>
      <div className="w-full h-[68px] py-[18px] mt-6 flex items-center justify-between bg-transparent">
        <Typography variant="header01" fontColor="gray07">
          응답 결과를 분석하고 있어요.
        </Typography>
      </div>
      <div className="fixed left-2/4 translate-x-[-50%] top-2/4 translate-y-[-50%]">
        <Spinner size="lg" />
      </div>
    </Fragment>
  );
}
