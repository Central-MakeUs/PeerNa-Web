import Card from '@components/common/atom/Card';
import { motion, useAnimation } from 'framer-motion';

const FlippableCard = () => {
  const controls = useAnimation();

  return (
    <div className="relative">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={controls}
        transition={{
          repeatType: 'loop',
          repeatDelay: 1,
          repeat: Infinity,
          duration: 1,
          ease: 'linear',
        }}
      >
        <div className="">
          <Card size="L" type="self" testResult="C" />
          <Card size="L" type="self" testResult="D" />
        </div>
      </motion.div>
    </div>
  );
};

export default FlippableCard;
