import { Image, CardType } from '@constants/image';
import Typography from './Typography';

interface CardItemProps {
  type: CardType;
  value: string;
  keyword: string;
  description: string;
}

export default function Card({
  type,
  value,
  keyword,
  description,
}: CardItemProps) {
  const path = Image[type];
  return (
    <section className="flex w-[350px] gap-3">
      <img src={path} width={82} height={144} alt={`${type} card`} />
      <div className="py-[12.5px]">
        <Typography variant="caption01" fontColor="gray05" className="mb-1">
          {value}
        </Typography>
        <Typography variant="header03" fontColor="gray08" className="mb-1">
          {keyword}
        </Typography>
        <Typography variant="body04" fontColor="gray06">
          {description}
        </Typography>
      </div>
    </section>
  );
}
