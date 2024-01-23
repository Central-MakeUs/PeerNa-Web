import { ReviewImages } from '@constants/images';
import { motion } from 'framer-motion';

interface ReviewCenterImageProps {
  curStep: number;
  trackStep: number;
  answerStep: number;
}

export default function ReviewCenterImage({
  curStep,
  answerStep,
}: ReviewCenterImageProps) {
  const imgSrc = ReviewImages[curStep - 1];
  return (
    <div className={`w-full flex justify-center py-12`}>
      <motion.img
        key={answerStep}
        src={imgSrc}
        alt="lottie image"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
