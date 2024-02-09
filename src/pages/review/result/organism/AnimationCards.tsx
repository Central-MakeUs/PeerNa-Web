import Content from '@components/wrapper/Content';
import Header from '@components/wrapper/Header';
import useGetReviewResult from '@hooks/api/member/index/useGetReviewResult';
import { Spacer } from '@nextui-org/react';
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
      <Header>
        <Header.TopBar />
        <Header.Body>
          <Header.Title>
            {`${data.memberName}님의 셀프 테스트 결과를 \n 분석한 피어 카드에요`}
          </Header.Title>
        </Header.Body>
      </Header>
      <Content>
        <div className="py-6 flex flex-col gap-3">
          {cards.map((card, index) => (
            <motion.div
              key={card}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Card type={card} />
            </motion.div>
          ))}
        </div>
        <Spacer y={16} />
      </Content>
    </Fragment>
  );
}
