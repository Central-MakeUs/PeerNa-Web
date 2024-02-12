import { REVIEW_LOTTIES } from '@constants/images';
import { motion } from 'framer-motion';
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

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-[40%]">
        <motion.div
          key={curStep}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <Lottie
            key={trackStep}
            animationData={LOTTIE}
            loop={false}
            autoplay={trackStep === 1 ? false : true}
          />
        </motion.div>
      </div>
    </div>
  );
}
