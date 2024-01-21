import InputProjectDate from '@components/pages/peerReview/organism/InputProjectDate';
import IntroPeerReview from '@components/pages/peerReview/organism/IntroPeerReview';
import IsOffendedResponse from '@components/pages/peerReview/organism/IsOffendedResponse';
import OverDate from '@components/pages/peerReview/organism/OverDate';
import RequestInit from '@components/pages/peerReview/organism/RequestInit';
import ThanksReview from '@components/pages/peerReview/organism/ThanksReview';
import WonderingMyCard from '@components/pages/peerReview/organism/WonderingMyCard';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { ActivityComponentType } from '@stackflow/react';
import { differenceInDays } from 'date-fns';
import { useState } from 'react';

type PeerTypeReviewPageParams = {
  step: string;
};

const PeerReviewPage: ActivityComponentType<PeerTypeReviewPageParams> = ({
  params,
}) => {
  const curStep = parseInt(params.step ?? 1);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const handleChangeStartDate = (newDate: Date | undefined) =>
    setStartDate((newDate ?? new Date()).toISOString());
  const handleChangeEndDate = (newDate: Date | undefined) =>
    setEndDate((newDate ?? new Date()).toISOString());
  function isLessThan30Days(startDate: Date, endDate: Date) {
    const diffDays = differenceInDays(endDate, startDate);
    return diffDays;
  }

  const isValidDate = isLessThan30Days(new Date(startDate), new Date(endDate));

  const bgColor =
    curStep === 6
      ? `bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300`
      : 'bg-transparent';

  return (
    <AppScreenContainer className={bgColor}>
      {curStep === 1 && <RequestInit />}

      {curStep === 2 && (
        <InputProjectDate
          startDate={startDate}
          endDate={endDate}
          handleChangeStartDate={handleChangeStartDate}
          handleChangeEndDate={handleChangeEndDate}
        />
      )}

      {curStep === 3 && isValidDate && <IntroPeerReview />}
      {curStep === 3 && !isValidDate && <OverDate />}

      {curStep === 4 && <IsOffendedResponse />}
      {curStep === 5 && <ThanksReview />}
      {curStep === 6 && <WonderingMyCard />}
    </AppScreenContainer>
  );
};

export default PeerReviewPage;
