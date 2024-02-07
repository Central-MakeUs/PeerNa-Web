import Typography from '@components/common/atom/Typography';
import ProgressBar from '@components/common/molecule/ProgressBar';
import { REVIEW_PICKER, REVIEW_TITLE } from '@constants/review';
import useReviewState from '@hooks/store/useReviewState';

interface TestTitleProps {
  type: string;
  curStep: number;
  trackStep: number;
}

export default function TestHeader({
  type,
  curStep,
  trackStep,
}: TestTitleProps) {
  const { review } = useReviewState();
  const getTitle = () => {
    if (curStep === 4 && trackStep === 6)
      return REVIEW_TITLE.peerReviewPrompt();
    if (curStep === 4 && trackStep === 7)
      return REVIEW_TITLE.oneLineReviewPrompt();
    if (type === 'self') return REVIEW_TITLE.self[curStep - 1];
    else {
      return REVIEW_TITLE.peer(review.peerName as string)[curStep - 1];
    }
  };

  const title = getTitle();

  const calcStep = REVIEW_PICKER[curStep].length / 2;
  const maxStep = curStep !== 4 ? calcStep : calcStep + 2;

  return (
    <div className="w-full">
      <ProgressBar step={curStep} maxStep={maxStep} trackStep={trackStep} />
      <div className="p-4">
        <Typography variant="header01">{title}</Typography>
      </div>
    </div>
  );
}
