import Typography from '@components/common/atom/Typography';
import { Card } from '@nextui-org/react';
import { getRgbaColorWithOpacity } from '@utils/styles';
import { motion } from 'framer-motion';
import {
  CSSProperties,
  Fragment,
  forwardRef,
  useEffect,
  useState,
} from 'react';

// TODO Card 정보 서버에서 받아서 변경해야 함.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FlipCard = forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  const bgOpacity = getRgbaColorWithOpacity('#ffffff', 0.4);

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
          <div className="w-[178px] h-[178px] rounded-full bg-slate-500"></div>
          <div className="text-center">
            <Typography variant="body03" fontColor="gray04">
              본투비 리더형
            </Typography>
            <Typography variant="header02" fontColor="gray08">
              성취하는 행동 대장
            </Typography>
          </div>
        </Card>
        <Card
          className="w-[294px] h-[408px] pt-[68px] pb-[32px] px-[58px] items-center gap-5 after:backdrop-blur-3xl bg-transparent"
          style={cardStyle(!type)}
        >
          <div
            className="w-[178px] h-[178px] rounded-full text-center"
            style={bgOpacity}
          >
            <p className="px-13 py-7 text-[80px] font-semibold">?</p>
          </div>
          <div className="text-center">
            <Typography variant="body03" fontColor="gray08">
              동료가 생각하는 나는 어떤 동료일까요?
            </Typography>
          </div>
        </Card>
      </motion.div>
    </Fragment>
  );
});

export default FlipCard;