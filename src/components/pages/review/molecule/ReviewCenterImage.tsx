import { TestImages } from '@constants/images';
import { motion } from 'framer-motion';

interface TestImageProps {
  curStep: number;
  trackStep: number;
  answerStep: number;
}

export default function TestImage({ curStep, answerStep }: TestImageProps) {
  const imgSrc = TestImages[curStep - 1];
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
