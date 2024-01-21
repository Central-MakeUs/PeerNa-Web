import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideBoxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trigger: any;
  children: ReactNode;
}
export default function SlideBox({ trigger, children }: SlideBoxProps) {
  const variants = {
    enter: {
      x: 100, // 항상 오른쪽에서 시작
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0, // 중앙으로 이동
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -100, // 왼쪽으로 이동하며 사라짐
      opacity: 0,
    },
  };

  return (
    <motion.div
      key={trigger}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
