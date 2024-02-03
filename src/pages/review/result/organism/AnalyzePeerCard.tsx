import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import AnayzePeerCardFetcher from '@pages/review/result/organism/AnimationCards';

import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { Fragment, Suspense } from 'react';

interface AnalyzePeerCardProps {
  handleClick: () => void;
}

export default function AnalyzePeerCard({ handleClick }: AnalyzePeerCardProps) {
  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <AnayzePeerCardFetcher />
      </Suspense>
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          내 피어 유형 확인하기
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
