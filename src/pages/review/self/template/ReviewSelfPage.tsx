import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { REVIEW_SELF_TITLE } from '@constants/review';
import useHistory from '@hooks/common/useHistory';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import { Spacer } from '@nextui-org/react';
import InputName from '@pages/review/self/organism/InputName';
import ReviewGuide from '@pages/review/self/organism/ReviewGuide';
import SelectJob from '@pages/review/self/organism/SelectJob';
import SelectPosition from '@pages/review/self/organism/SelectPosition';
import { ActivityComponentType } from '@stackflow/react';

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

  const history = useHistory();

  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon
            handleClick={() => {
              const { activity, params } = history.history;

              if (activity === 'HomePage') {
                push('HomePage', { ...params });
                return;
              } else {
                pop();
                return;
              }
            }}
          />
        </Header.TopBar>
      </Header>
      <Spacer y={10} />
      <div className="w-full px-4">
        <Typography variant="header01" fontColor="gray08" className="text-left">
          {REVIEW_SELF_TITLE[curStep]}
        </Typography>
      </div>
      <Spacer y={4} />
      <div className="w-full flex flex-col px-4">
        {curStep === 0 && <ReviewGuide />}
        {curStep === 1 && <InputName />}
        {curStep === 2 && <SelectJob />}
        {curStep === 3 && <SelectPosition />}
      </div>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleClick} isDisabled={isValidPush}>
          {curStep === lastStep ? '시작하기' : '다음'}
        </Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default ReviewSelfPage;
