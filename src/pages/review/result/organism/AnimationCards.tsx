import Typography from '@components/common/atom/Typography';
import { PeerCardType } from '@constants/image';
import { useGetReviewResult } from '@hooks/api/useGetReviewResult';
import Card from '@pages/review/result/molecule/Card';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

export default function AnayzePeerCardFetcher() {
  const { data } = useGetReviewResult();
  const cards = [data.group1, data.group2, data.group3, data.group4];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // 각 카드의 등장 시간 간격
      },
    }),
  };

  return (
    <Fragment>
      <div className="box-content w-full h-[68px] py-[18px] mt-6 flex items-center justify-between bg-transparent px-5">
        <Typography variant="header01" fontColor="gray07">
          {`${data.memberName}님의 셀프 테스트 결과를 \n 분석한 피어 카드에요`}
        </Typography>
      </div>
      <div className="py-6 flex flex-col gap-3">
        {cards.map((card, index) => (
          <motion.div
            key={card}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Card type={card as PeerCardType} />
          </motion.div>
        ))}
      </div>
    </Fragment>
  );
}
