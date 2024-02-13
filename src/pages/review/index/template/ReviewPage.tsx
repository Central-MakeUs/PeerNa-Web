import Button from '@components/common/atom/Button';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { UtilityKeys } from '@constants/localStorage';
import { REVIEW_PICKER } from '@constants/review';
import usePostSigninUserReviewPeer from '@hooks/api/review/index/usePostSigninUserReviewPeer';
import usePostUnknownUserReviewPeer from '@hooks/api/review/index/usePostUnknownUserReviewPeer';
import { useFlow, useStepFlow } from '@hooks/common/useStackFlow';
import useReviewState from '@hooks/store/useReviewState';
import ReviewCenterImage from '@pages/review/index/atom/ReviewCenterImage';
import TestHeader from '@pages/review/index/molecule/ReviewHeader';
import OneLineReview from '@pages/review/index/organism/OneLineReview';
import PeerType from '@pages/review/index/organism/PeerType';
import TwoWayPicker from '@pages/review/index/organism/TwoWayPicker';
import { ActivityComponentType } from '@stackflow/react';
import { PeerGradeTypes } from '@store/reviewState';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type ReviewPageParams = {
  type: string;
  step: string;
};

const ReviewPage: ActivityComponentType<ReviewPageParams> = ({ params }) => {
  const { handleRemoveLastAnswers, handleChangePeerGrade } = useReviewState();
  const { push } = useFlow();
  const { stepPush, stepReplace } = useStepFlow('ReviewPage');
  const type = params.type;

  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);

  const [trackStep, setTrackStep] = useState<number>(1);
  const [answerStep, setAnswerStep] = useState<number>(1);
  const calcStep = REVIEW_PICKER[curStep].length / 2;
  const maxStep = curStep !== 4 ? calcStep : calcStep + 2;

  const handleClickNextStep = () => {
    if (trackStep >= maxStep) {
      const stepTimer = setTimeout(() => {
        stepPush({ type: type, step: nextStep });
        setTrackStep(() => 1);
        setAnswerStep(() => 1);
      }, 500);
      return () => clearTimeout(stepTimer);
    }

    const answerTimer = setTimeout(() => {
      setTrackStep(prev => prev + 1);
      setAnswerStep(prev => prev + 2);
    }, 500);
    return () => clearTimeout(answerTimer);
  };

  const handleClickBackButton = () => {
    if (curStep === 1 && trackStep === 1) {
      push('OnboardingPage', { step: '3' });
      return;
    }
    if (trackStep === 1) {
      stepReplace({ type: type, step: (curStep - 1).toString() });
      handleRemoveLastAnswers();
      setAnswerStep(REVIEW_PICKER[curStep - 1]?.length - 1 || 0);
      setTrackStep(REVIEW_PICKER[curStep - 1]?.length / 2 || 0);
    } else {
      handleRemoveLastAnswers();
      setTrackStep(prev => prev - 1);
      if (trackStep <= 6) setAnswerStep(prev => prev - 2);
    }
  };

  const unknownMutation = usePostUnknownUserReviewPeer();
  const singinMutation = usePostSigninUserReviewPeer();
  const { review } = useReviewState();
  const handleClickLastButton = () => {
    const hasUuid = localStorage.getItem(UtilityKeys.UUID);
    const uuid = hasUuid ? hasUuid : uuidv4();
    localStorage.setItem(UtilityKeys.UUID, uuid);

    if (type === 'peer') {
      if (review.uuid) {
        unknownMutation.mutate({
          targetUuid: review.uuid,
          uuid: uuid,
          answerIdList: review.answers,
          feedback: review.feedback,
          peerGrade: review.peerGrade,
        });
      }
      if (review.targetId) {
        singinMutation.mutate({
          targetId: review.targetId,
          answerIdList: review.answers,
          feedback: review.feedback,
          peerGrade: review.peerGrade,
        });
      }
      push('ReviewPeerPage', { step: '7' });
      return;
    }
    push('ReviewResultPage', { type: type, step: '1' });
  };

  const handleClickPeerTypeButton = (type: PeerGradeTypes) => {
    handleChangePeerGrade(type);
    const peerTimer = setTimeout(() => {
      setTrackStep(prev => prev + 1);
    }, 500);
    return () => clearTimeout(peerTimer);
  };

  useEffect(() => {
    const popStateEventListener = () => {
      setTrackStep(() => 1);
      setAnswerStep(() => 1);
    };

    window.addEventListener('popstate', popStateEventListener);
    return () => window.removeEventListener('popstate', popStateEventListener);
  }, []);

  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleClickBackButton} />
        </Header.TopBar>
      </Header>
      <div className="flex flex-col w-full items-center px-4 mt-6 gap-4">
        <TestHeader type={type} curStep={curStep} trackStep={trackStep} />
        {(curStep !== 4 || trackStep !== 7) &&
          (curStep !== 4 || trackStep !== 6) && (
            <ReviewCenterImage curStep={curStep} trackStep={trackStep} />
          )}
        {!(curStep === 4 && (trackStep === 6 || trackStep === 7)) && (
          <TwoWayPicker
            curStep={curStep}
            answerStep={answerStep}
            handleClickNextStep={handleClickNextStep}
          />
        )}
        {curStep === 4 && trackStep === 6 && (
          <PeerType
            answerStep={answerStep}
            handleClick={handleClickPeerTypeButton}
          />
        )}
        {curStep === 4 && trackStep === 7 && (
          <OneLineReview answerStep={answerStep} />
        )}
      </div>
      {curStep === 4 && trackStep === 7 && (
        <Footer bottom={3} className="px-4">
          <Button
            onClick={handleClickLastButton}
            isDisabled={review.feedback === ''}
          >
            시작하기
          </Button>
        </Footer>
      )}
    </AppScreenContainer>
  );
};

export default ReviewPage;
