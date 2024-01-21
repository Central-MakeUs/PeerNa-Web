import { TestImages } from '@constants/images';
import { motion } from 'framer-motion';

interface TestImageProps {
  curStep: number;
  trackStep: number;
  answerStep: number;
}

export default function TestImage({
  curStep,
  trackStep,
  answerStep,
}: TestImageProps) {
  const isExcept = curStep === 4 && trackStep === 6;
  const getImgSrc = () => {
    if (isExcept) return TestImages.at(-1);
    else return TestImages[curStep - 1];
  };

  const imgSrc = getImgSrc();
  return (
    <div className={`w-full flex justify-center ${isExcept ? '' : 'py-12'}`}>
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
