import gradient from '@assets/common/bg_gradient.png';
import Spinner from '@components/common/atom/Spinner';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import GuessWhoResponse from '@pages/review/peer/organism/GuessWhoResponse';
import InputProjectDate from '@pages/review/peer/organism/InputProjectDate';
import IntroPeerReview from '@pages/review/peer/organism/IntroPeerReview';
import IsOffendedResponse from '@pages/review/peer/organism/IsOffendedResponse';
import OverDate from '@pages/review/peer/organism/OverDate';
import RequestInit from '@pages/review/peer/organism/RequestInit';
import ThanksReview from '@pages/review/peer/organism/ThanksReview';
import WonderingMyCard from '@pages/review/peer/organism/WonderingMyCard';
import { ActivityComponentType } from '@stackflow/react';
import { isValidDateRange } from '@utils/date';
import { CSSProperties, Suspense, useState } from 'react';
import toast from 'react-hot-toast';

type ReviewPeerPageParams = {
  step: string;
  uuid?: string;
  memberId?: string;
};

const ReviewPeerPage: ActivityComponentType<ReviewPeerPageParams> = ({
  params,
}) => {
  const curStep = parseInt(params.step ?? 1);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const handleChangeStartDate = (newDate: Date | undefined) =>
    setStartDate((newDate ?? new Date()).toISOString());
  const handleChangeEndDate = (newDate: Date | undefined) => {
    if (!isValidDateRange(startDate, newDate!.toISOString())) {
      toast.error('시작일은 종료일보다 큰 값일 수 없습니다');
    } else {
      setEndDate((newDate ?? new Date()).toISOString());
    }
  };

  const bgStyle: CSSProperties =
    curStep === 8
      ? {
          backgroundImage: `url(${gradient})`,
          backgroundSize: 'cover',
        }
      : {};

  return (
    <AppScreenContainer className={'bg-transparent'} style={bgStyle}>
      {curStep === 1 && (
        <Suspense fallback={<Spinner />}>
          <RequestInit uuid={params.uuid} memberId={params.memberId} />
        </Suspense>
      )}
      {curStep === 2 && (
        <InputProjectDate
          startDate={startDate}
          endDate={endDate}
          handleChangeStartDate={handleChangeStartDate}
          handleChangeEndDate={handleChangeEndDate}
        />
      )}
      {curStep === 3 && <OverDate />}
      {curStep === 4 && <IntroPeerReview />}
      {curStep === 5 && <IsOffendedResponse />}
      {curStep === 6 && <GuessWhoResponse />}
      {curStep === 7 && <ThanksReview />}
      {curStep === 8 && <WonderingMyCard />}
    </AppScreenContainer>
  );
};

export default ReviewPeerPage;
