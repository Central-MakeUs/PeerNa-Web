import Button from '@components/common/atom/Button';
import Spinner from '@components/common/atom/Spinner';
import Footer from '@components/wrapper/Footer';
import AnayzePeerCardFetcher from '@pages/review/result/organism/AnimationCards';
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
      <Footer bottom={3} className="px-4">
        <Button onClick={handleClick}>내 피어 유형 확인하기</Button>
      </Footer>
    </Fragment>
  );
}
