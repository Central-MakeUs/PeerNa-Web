import Typography from '@components/common/atom/Typography';
import { CardInformation, PeerCardType } from '@constants/image';

interface CardItemProps {
  type: PeerCardType;
}

export default function Card({ type }: CardItemProps) {
  const { image, caption, title, content } = CardInformation[type];
  return (
    <section className="flex w-[350px] gap-3">
      <img src={image} width={82} height={144} alt={`${type} card`} />
      <div className="py-[12.5px]">
        <Typography variant="caption01" fontColor="gray05" className="mb-1">
          {caption}
        </Typography>
        <Typography variant="header03" fontColor="gray08" className="mb-1">
          {title}
        </Typography>
        <Typography variant="body04" fontColor="gray06">
          {content}
        </Typography>
      </div>
    </section>
  );
}
