import Typography from '@components/common/atom/Typography';
import { KEYWORD_CARD_INFO } from '@constants/list';
import { ResultKeyword } from '@type/enums';

interface CardItemProps {
  type: ResultKeyword;
}

export default function Card({ type }: CardItemProps) {
  const { image, caption, title, content } = KEYWORD_CARD_INFO[type];
  return (
    <section className="flex gap-3">
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
