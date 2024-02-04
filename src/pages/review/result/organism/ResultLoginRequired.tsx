import Typography from '@components/common/atom/Typography';
import Card from '@pages/review/result/molecule/Card';

import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { PeerCardType } from '@constants/image';
import useHistory from '@hooks/common/useHistory';
import useToken from '@hooks/common/useToken';
import useModal from '@hooks/store/useModal';
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
  const { openModal } = useModal();
  const { accessToken } = useToken();
  const { history, handleChangeHistory } = useHistory();

  useEffect(() => {
    if (history.activity !== 'ReviewResultPage') {
      handleChangeHistory('ReviewResultPage', { type: 'self', step: '1' });
    }
    if (!accessToken) {
      openModal('login');
    }
  }, [history]);

  const cardTypes: PeerCardType[] = [
    'ANALYTICAL',
    'COMPREHENSIVE',
    'FUTURE_ORIENTED',
    'WARMHEARTED',
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
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          내 피어 유형 확인하기
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
