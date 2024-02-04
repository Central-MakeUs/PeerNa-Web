import whatsMyTypeCard from '@assets/whatsMyTypeCard.png';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewState from '@hooks/store/useReviewState';
import { Card } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

export default function WonderingMyCard() {
  const { push } = useFlow();
  const { handleClearReviews } = useReviewState();
  const handleClick = () => {
    handleClearReviews();
    push('OnboardingPage', { step: '1' });
  };
  const handleClickRightButton = () => push('HomePage', {});

  return (
    <Fragment>
      <NavigationHeader
        rightButtonProps={{
          isShow: true,
          text: '홈으로 가기',
          handleClick: handleClickRightButton,
        }}
        bodyProps={{
          isShow: true,
          title: '내 피어 카드와 유형도\n궁금하다면?',
          textAlign: 'center',
        }}
      />
      <div className="py-6 flex flex-col gap-3">
        <motion.div
          className="card"
          animate={{ rotateY: 360, rotateZ: [0, 5, 0, -5, 0] }}
          transition={{
            duration: 4,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 1,
          }}
        >
          <Card className="w-[294px] h-[408px]">
            <img
              src={whatsMyTypeCard}
              alt="Card"
              className="w-full h-full object-cover rounded-lg"
            />
          </Card>
        </motion.div>
      </div>
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          셀프 테스트 시작하기
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
