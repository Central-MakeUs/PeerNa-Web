import whatsMyTypeCard from '@assets/whatsMyTypeCard.png';
import { Card } from '@nextui-org/react';
import { ReviewResultType } from '@type/index';
import { motion } from 'framer-motion';
import {
  CSSProperties,
  Fragment,
  forwardRef,
  useEffect,
  useState,
} from 'react';

interface FlipCardProps {
  testType: ReviewResultType;
}

// TODO Card 컴포넌트로 변경
const FlipCard = forwardRef<HTMLDivElement, FlipCardProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ testType, ...props }, ref) => {
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
          <Card
            id="card"
            className="w-[294px] h-[408px] pt-[68px] pb-[32px] px-[58px] items-center gap-[76px]"
            style={cardStyle(type)}
          >
           
          </Card>
          <Card
            className="w-[294px] h-[408px] items-center gap-5 bg-transparent"
            style={cardStyle(!type)}
          >
            <img src={whatsMyTypeCard} className="w-full h-full" />
          </Card>
        </motion.div>
      </Fragment>
    );
  },
);

export default FlipCard;
