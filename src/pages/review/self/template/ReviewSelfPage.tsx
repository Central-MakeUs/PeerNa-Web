import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { REVIEW_SELF_TITLE } from '@constants/review';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import useReviewState from '@hooks/store/useReviewState';
import InputName from '@pages/review/self/organism/InputName';
import ReviewGuide from '@pages/review/self/organism/ReviewGuide';
import SelectJob from '@pages/review/self/organism/SelectJob';
import SelectPosition from '@pages/review/self/organism/SelectPosition';
import { ActivityComponentType } from '@stackflow/react';
import { useEffect } from 'react';

type ReviewSelfParams = {
  step: string;
};

const ReviewSelfPage: ActivityComponentType<ReviewSelfParams> = ({
  params,
}) => {
  const { reviewSelf, isValidName } = useReviewSelfState();

  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = REVIEW_SELF_TITLE.length;

  const { push, pop } = useFlow();
  const handleClick = () => {
    if (curStep === lastStep - 1) {
      push('ReviewPage', { type: 'self', step: '1' });
      return;
    }

    push('ReviewSelfPage', { step: nextStep });
  };

  const stepValidation = () => {
    if (curStep === 1) return !isValidName;
    if (curStep === 2) return reviewSelf.job === '';
    if (curStep === 3) return reviewSelf.part === '';
  };

  const isValidPush = stepValidation();

  const { handleClearReviews } = useReviewState();
  useEffect(() => {
    if (curStep === 1) handleClearReviews();
  }, []);

  return (
    <AppScreenContainer>
      <NavigationHeader
        backIconProps={{
          isShow: true,
          handleClick: () => pop({ animate: true }),
        }}
        bodyProps={{
          isShow: true,
          title: REVIEW_SELF_TITLE[curStep],
          marginClass: 'mt-4',
        }}
      />
      {curStep === 0 && <ReviewGuide />}
      {curStep === 1 && <InputName />}
      {curStep === 2 && <SelectJob />}
      {curStep === 3 && <SelectPosition />}

      <FixedBottomButton handleClick={handleClick} isDisabled={isValidPush}>
        <Typography variant="body02" fontColor="white">
          {curStep === lastStep ? '시작하기' : '다음'}
        </Typography>
      </FixedBottomButton>
    </AppScreenContainer>
  );
};

export default ReviewSelfPage;
