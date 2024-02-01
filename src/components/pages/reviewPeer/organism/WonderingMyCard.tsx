import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import useReviewState from '@hooks/useReviewState';
import { useFlow } from '@hooks/useStackFlow';
import { Card } from '@nextui-org/react';
import { getRgbaColorWithOpacity } from '@utils/styles';
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
  const bgOpacity = getRgbaColorWithOpacity('#ffffff', 0.4);

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
          animate={{ rotateY: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2,
          }}
        >
          <Card className="w-[294px] h-[408px] pt-[68px] pb-[32px] px-[58px] items-center justify-center after:backdrop-blur-3xl bg-transparent">
            <div
              className="w-[178px] h-[178px] rounded-full text-center"
              style={bgOpacity}
            >
              <p className="px-13 py-7 text-[80px] font-semibold">?</p>
            </div>
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
