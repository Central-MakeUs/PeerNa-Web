import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import { useFlow } from '@hooks/useStackFlow';
import { getAccessToken } from '@utils/token';
import { Fragment, useEffect } from 'react';

export default function LoadingResult() {
  const { push } = useFlow();

  useEffect(() => {
    setTimeout(() => {
      if (getAccessToken())
        push('ReviewResultPage', { type: 'self', step: '2' });
      else push('ReviewResultPage', { type: 'self', step: '3' });
    }, 1500);
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
