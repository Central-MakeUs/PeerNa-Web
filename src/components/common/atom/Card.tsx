import card_purple from '@assets/image/card_purple.png';
import Typography from './Typography';

interface CardItemProps {
  cardItem: {
    value: string;
    keyword: string;
    description: string;
  };
}

export default function Card({ cardItem }: CardItemProps) {
  return (
    <section className="flex w-[350px] gap-3">
      <img src={card_purple} width={82} height={144} />
      <div className="py-[12.5px]">
        <Typography variant="caption01" fontColor="gray05" className="mb-1">
          {cardItem.value}
        </Typography>
        <Typography variant="header03" fontColor="gray08" className="mb-1">
          {cardItem.keyword}
        </Typography>
        <Typography variant="body04" fontColor="gray06">
          {cardItem.description}
        </Typography>
      </div>
    </section>
  );
}
