import Typography from '@components/common/atom/Typography';
import Card from '@pages/review/result/molecule/Card';

import Button from '@components/common/atom/Button';
import Footer from '@components/wrapper/Footer';
import useHistory from '@hooks/common/useHistory';
import useToken from '@hooks/common/useToken';
import useModal from '@hooks/store/useModal';
import { ResultKeyword } from '@type/enums';
import { motion } from 'framer-motion';
import { Fragment, useEffect } from 'react';

interface ResultLoginRequiredProps {
  handleClick: () => void;
}

// TODO 데이터 서버에서 받아와야 함.
// TODO Card image 변경 및 서버에서 데이터 받아와야 함.
export default function ResultLoginRequired({
  handleClick,
}: ResultLoginRequiredProps) {
  const { openModal } = useModal('login');
  const { accessToken } = useToken();
  const { history, handleChangeHistory } = useHistory();

  useEffect(() => {
    if (history.activity !== 'ReviewResultPage') {
      handleChangeHistory('ReviewResultPage', { type: 'self', step: '1' });
    }
    if (!accessToken) {
      openModal();
    }
  }, [history]);

  const cardTypes: ResultKeyword[] = [
    ResultKeyword.ANALYTICAL,
    ResultKeyword.COMPREHENSIVE,
    ResultKeyword.FUTURE_ORIENTED,
    ResultKeyword.WARMHEARTED,
  ];

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
          {'회원님의 셀프 테스트 결과를 \n 분석한 피어 카드에요'}
        </Typography>
      </div>
      <div className="py-6 flex flex-col gap-3">
        {cardTypes.map((card, index) => (
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
      <Footer>
        <Button onClick={handleClick}>내 피어 유형 확인하기</Button>
      </Footer>
    </Fragment>
  );
}
