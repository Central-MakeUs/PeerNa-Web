import Badge from '@components/common/atom/Badge';
import { TEST_TYPE_INFO } from '@constants/list';
import { motion } from 'framer-motion';
import Typography from './Typography';

interface CardProps {
  size: 'M' | 'L';
  type: 'peer' | 'self';
  testResult: 'D' | 'I' | 'S' | 'C';
}

export default function TypeCard({ size, type, testResult }: CardProps) {
  const cardType = type === 'peer' ? 'primary' : 'default';
  const badgeText = type === 'peer' ? '피어테스트' : '셀프 테스트';

  const bgCard = `!bg-D bg-[center_top_3rem] bg-no-repeat`;

  const cardSize =
    size === 'L'
      ? 'w-[294px] h-[408px] py-7 bg-200 bg-[center_top_5rem]'
      : ' w-[171px] h-[238px] py-4 bg-100 bg-[center_top_3rem]';

  return (
    <motion.div
      className={`${bgCard} ${cardSize}  rounded-2xl border-1 border-[#E3E6E8] flex flex-col items-center justify-between`}
    >
      <Badge type={cardType} className="mb-1.5">
        {badgeText}
      </Badge>
      <p>
        <Typography
          variant="header03"
          fontColor="gray08"
          className="text-center"
        >
          {TEST_TYPE_INFO[testResult].title}
        </Typography>
        <Typography
          variant="body03"
          fontColor="gray04"
          className={`text-center ${size === 'L' ? '!whitespace-nowrap mt-2' : ''}`}
        >
          {TEST_TYPE_INFO[testResult].description}
        </Typography>
      </p>
    </motion.div>
  );
}
