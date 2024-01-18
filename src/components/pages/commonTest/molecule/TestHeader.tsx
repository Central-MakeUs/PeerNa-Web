import Typography from '@components/common/atom/Typography';
import ProgressBar from '@components/common/molecule/ProgressBar';
import { commonTestAnswer, commonTestTitle } from '@constants/commonTest';

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
  const getTitle = () => {
    if (curStep === 4 && trackStep === 6)
      return commonTestTitle.peerReviewPrompt();
    if (curStep === 4 && trackStep === 7)
      return commonTestTitle.oneLineReviewPrompt();
    if (type === 'self') return commonTestTitle.self[curStep - 1];
    else return commonTestTitle.peer('Test')[curStep - 1];
  };

  const title = getTitle();

  const calcStep = commonTestAnswer[curStep].length / 2;
  const maxStep = curStep !== 4 ? calcStep : calcStep + 2;

  return (
    <div className="w-[350px]">
      <ProgressBar step={curStep} maxStep={maxStep} trackStep={trackStep} />
      <div className="py-4">
        <Typography variant="header01">{title}</Typography>
      </div>
    </div>
  );
}
