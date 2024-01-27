import Spinner from '@components/common/atom/Spinner';
import InputProjectDate from '@components/pages/reviewPeer/organism/InputProjectDate';
import IntroPeerReview from '@components/pages/reviewPeer/organism/IntroPeerReview';
import IsOffendedResponse from '@components/pages/reviewPeer/organism/IsOffendedResponse';
import OverDate from '@components/pages/reviewPeer/organism/OverDate';
import RequestInit from '@components/pages/reviewPeer/organism/RequestInit';
import ThanksReview from '@components/pages/reviewPeer/organism/ThanksReview';
import WonderingMyCard from '@components/pages/reviewPeer/organism/WonderingMyCard';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { ActivityComponentType } from '@stackflow/react';
import { Suspense, useState } from 'react';

type ReviewPeerPageParams = {
  step: string;
  uuid?: string;
};

const ReviewPeerPage: ActivityComponentType<ReviewPeerPageParams> = ({
  params,
}) => {
  const curStep = parseInt(params.step ?? 1);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const handleChangeStartDate = (newDate: Date | undefined) =>
    setStartDate((newDate ?? new Date()).toISOString());
  const handleChangeEndDate = (newDate: Date | undefined) =>
    setEndDate((newDate ?? new Date()).toISOString());

  const bgColor =
    curStep > 6
      ? `bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300`
      : 'bg-transparent';

  return (
    <AppScreenContainer className={bgColor}>
      {curStep === 1 && (
        <Suspense fallback={<Spinner />}>
          <RequestInit uuid={curStep === 1 ? params.uuid! : ''} />
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
      {curStep === 3 && <IntroPeerReview />}
      {curStep === 4 && <OverDate />}
      {curStep === 5 && <IsOffendedResponse />}
      {curStep === 6 && <ThanksReview />}
      {curStep === 7 && <WonderingMyCard />}
    </AppScreenContainer>
  );
};

export default ReviewPeerPage;
