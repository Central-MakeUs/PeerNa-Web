import { ResultKeyword } from '@type/enums';
import TestCardItem from '../atom/TestCardItem';

interface TestCardListProps {
  selfTestCardList?: ResultKeyword[];
  peerCardList?: ResultKeyword[];
  type: 'self' | 'peer' | 'locked';
  className?: string;
}

const getCardList = (
  type: 'self' | 'peer' | 'locked',
  selfTestCardList?: ResultKeyword[],
  peerCardList?: ResultKeyword[],
) => {
  const cardListMap = {
    self: selfTestCardList || [],
    peer: peerCardList || [],
    locked: Array(4).fill('LOCKED'),
  };

  return cardListMap[type];
};

export default function TestCardList({
  selfTestCardList,
  peerCardList,
  type,
  className,
}: TestCardListProps) {
  const cardList = getCardList(type, selfTestCardList, peerCardList);

  return (
    <section className={`flex gap-2 justify-center ${className}`}>
      {cardList.map((cardType: ResultKeyword, index) => (
        <TestCardItem key={index} cardType={cardType} />
      ))}
    </section>
  );
}
