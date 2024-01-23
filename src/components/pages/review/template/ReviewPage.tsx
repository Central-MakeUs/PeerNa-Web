import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';
import TestImage from '@components/pages/review/molecule/ReviewCenterImage';
import TestHeader from '@components/pages/review/molecule/ReviewHeader';
import OneLineReview from '@components/pages/review/organism/OneLineReview';
import PeerType from '@components/pages/review/organism/PeerType';
import TwoWayPicker from '@components/pages/review/organism/TwoWayPicker';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { REVIEW_PICKER } from '@constants/review';
import useReviewState from '@hooks/useReviewState';
import { useFlow, useStepFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';
import { PeerGradeTypes } from '@store/reviewState';
import { useEffect, useState } from 'react';

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
      push('OnBoardPage', { step: '3' });
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

  const handleClickLastButton = () => {
    if (type === 'self') {
      push('ReviewResultPage', { type: type, step: '1' });
    }
    if (type === 'peer') {
      push('ReviewPeerPage', { step: '5' });
    }
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
      <div className="w-screen min-h-screen flex justify-center">
        <div className="w-full max-w-screen-md` flex flex-col px-5">
          <div className="box-border w-full h-[68px] px-2 py-ㅁ[18px] flex items-center justify-between bg-transparent">
            <IconButton
              iconProps={{
                id: 'ArrowLeft',
                color: 'black',
              }}
              onClick={handleClickBackButton}
            />
          </div>
          <div className="flex flex-col items-center mt-6 gap-4">
            <TestHeader type={type} curStep={curStep} trackStep={trackStep} />
            {(curStep !== 4 || trackStep !== 7) && (
              <TestImage
                curStep={curStep}
                trackStep={trackStep}
                answerStep={answerStep}
              />
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
        </div>
        {curStep === 4 && trackStep === 7 && (
          <FixedBottomButton handleClick={handleClickLastButton}>
            <Typography variant="body02" fontColor="white">
              시작하기
            </Typography>
          </FixedBottomButton>
        )}
      </div>
    </AppScreenContainer>
  );
};

export default ReviewPage;
