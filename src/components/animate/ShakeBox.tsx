import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ShakeBoxProps {
  trigger: boolean;
  children: ReactNode;
}

export default function ShakeBox({ trigger, children }: ShakeBoxProps) {
  const shakeAnimation = {
    x: [0, -5, 5, -5, 5, 0],
    transition: { type: 'tween', duration: 0.5 },
  };

  return (
    <motion.div animate={trigger ? shakeAnimation : {}}>{children}</motion.div>
  );
}
