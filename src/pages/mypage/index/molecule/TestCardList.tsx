import { CardType } from '@constants/image';
import TestCardItem from '../atom/TestCardItem';

interface TestCardListProps {
  selfTestCardList?: string[];
  peerCardList?: string[];
  type: 'self' | 'peer' | 'locked';
  className?: string;
}

const getCardList = (
  type: 'self' | 'peer' | 'locked',
  selfTestCardList?: string[],
  peerCardList?: string[],
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
      {cardList.map((cardType, index) => (
        <TestCardItem key={index} cardType={cardType as CardType} />
      ))}
    </section>
  );
}
