import { REVIEW_LOTTIES } from '@constants/images';
import Lottie from 'lottie-react';

interface ReviewCenterImageProps {
  curStep: number;
  trackStep: number;
}

export default function ReviewCenterImage({
  curStep,
  trackStep,
}: ReviewCenterImageProps) {
  const LOTTIE = REVIEW_LOTTIES[curStep - 1];

  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-[40%]">
        <Lottie key={trackStep} animationData={LOTTIE} loop={false} />
      </div>
    </div>
  );
}
