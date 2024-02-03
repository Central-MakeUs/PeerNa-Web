import Badge from '@components/common/atom/Badge';
import Typography from './Typography';
import { cardText } from '@constants/card';

interface CardProps {
  size: 'M' | 'L';
  type: 'peer' | 'self';
  testResult: 'D' | 'I' | 'S' | 'C';
}

export default function Card({ size, type, testResult }: CardProps) {
  const cardType = type === 'peer' ? 'primary' : 'default';
  const badgeText = type === 'peer' ? '피어테스트' : '셀프 테스트';

  const bgCard = `bg-C bg-[center_top_3rem] bg-no-repeat`;

  const cardSize =
    size === 'L'
      ? 'w-[294px] h-[408px] py-7 bg-200 bg-[center_top_5rem]'
      : ' w-[171px] h-[238px] py-4 bg-100 bg-[center_top_3rem]';

  return (
    <div
      className={`${bgCard} ${cardSize} rounded-2xl border-1 border-[#E3E6E8] flex flex-col items-center justify-between`}
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
          {cardText[testResult].title}
        </Typography>
        <Typography
          variant="body03"
          fontColor="gray04"
          className={`text-center ${size === 'L' ? '!whitespace-nowrap mt-2' : ''}`}
        >
          {cardText[testResult].description}
        </Typography>
      </p>
    </div>
  );
}
