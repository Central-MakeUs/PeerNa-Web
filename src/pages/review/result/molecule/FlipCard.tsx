import PeerCard from '@components/common/atom/PeerCard';
import { TestType } from '@type/enums';
import { motion } from 'framer-motion';
import {
  CSSProperties,
  Fragment,
  forwardRef,
  useEffect,
  useState,
} from 'react';

interface FlipCardProps {
  selfTestType: TestType;
  peerTestType: TestType;
  size: 'M' | 'L';
}

const FlipCard = forwardRef<HTMLDivElement, FlipCardProps>(
  ({ selfTestType, peerTestType, size, ...props }, ref) => {
    const [type, setType] = useState<boolean>(true);
    useEffect(() => {
      const flipInterval = setInterval(() => {
        setType(prev => !prev);
      }, 2000);
      return () => clearInterval(flipInterval);
    }, []);

    const flipAnimation = {
      rotateY: 0,
      transition: { duration: 0.6 },
    };

    // 카드 스타일. `type`에 따라 opacity와 visibility를 조정
    const cardStyle = (isVisible: boolean): CSSProperties => ({
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      position: 'absolute',
      backfaceVisibility: 'hidden',
      transform: isVisible ? 'rotateY(0deg)' : 'rotateY(180deg)',
      transition: 'opacity 0.1s, transform 0.5s',
    });

    return (
      <Fragment>
        <motion.div
          ref={ref}
          animate={flipAnimation}
          style={{ perspective: 1000 }}
          className="w-full flex justify-center"
        >
          <div style={cardStyle(type)} {...props}>
            <PeerCard type="self" size={size} testResult={selfTestType} />
          </div>
          <div style={cardStyle(!type)}>
            <PeerCard type="peer" size={size} testResult={peerTestType} />
          </div>
        </motion.div>
      </Fragment>
    );
  },
);

export default FlipCard;
