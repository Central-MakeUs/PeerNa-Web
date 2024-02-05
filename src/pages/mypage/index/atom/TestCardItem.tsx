import Typography from '@components/common/atom/Typography';
import { KEYWORD_CARD_INFO } from '@constants/list';
import { ResultKeyword } from '@type/enums';

export default function TestCardItem({
  cardType,
}: {
  cardType: ResultKeyword;
}) {
  console.log(cardType);

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={KEYWORD_CARD_INFO[cardType].image}
        className="w-[82px]"
        alt={cardType}
      />
      <Typography variant="body04" fontColor="gray08">
        {KEYWORD_CARD_INFO[cardType].title}
      </Typography>
    </div>
  );
}
