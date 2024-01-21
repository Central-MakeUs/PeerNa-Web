import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import InputName from '@components/pages/reviewSelf/organism/InputName';
import SelectJob from '@components/pages/reviewSelf/organism/SelectJob';
import SelectPosition from '@components/pages/reviewSelf/organism/SelectPosition';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { REVIEW_SELF_TITLE } from '@constants/review';
import useSelfTestInformation from '@hooks/useSelfTestInformation';
import { useFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';

type ReviewSelfParams = {
  step: string;
};

const ReviewSelfPage: ActivityComponentType<ReviewSelfParams> = ({
  params,
}) => {
  const { selfTest, isValidName } = useSelfTestInformation();

  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = REVIEW_SELF_TITLE.length;

  const { push, pop } = useFlow();
  const handleClick = () => {
    if (curStep === lastStep) {
      push('ReviewPage', { type: 'self', step: '1' });
      return;
    }

    push('ReviewSelfPage', { step: nextStep });
  };

  const stepValidation = () => {
    if (curStep === 1) return !isValidName;
    if (curStep === 2) return selfTest.job === '';
    if (curStep === 3) return selfTest.position === '';
  };

  const isValidPush = stepValidation();

  return (
    <AppScreenContainer>
      <NavigationHeader
        backIconProps={{
          isShow: true,
          handleClick: () => pop({ animate: true }),
        }}
        bodyProps={{
          isShow: true,
          title: REVIEW_SELF_TITLE[curStep - 1],
          marginClass: 'mt-4',
        }}
      />
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
