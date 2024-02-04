import Typography from '@components/common/atom/Typography';
import { cardItem, CardType, cardText } from '@constants/card';

export default function PeerItem({ type }: { type: CardType }) {
  const { title, description } = cardText[type];
  return (
    <article className="flex flex-col items-center gap-2 w-[236px] mx-auto">
      <img
        src={cardItem[type]}
        alt={`피어 ${type} 테스트`}
        className="w-[100px] h-[100px]"
      />
      <Typography variant="header03" fontColor="gray08">
        {title}
      </Typography>
      <Typography variant="body04" fontColor="gray06">
        {description}
      </Typography>
    </article>
  );
}
