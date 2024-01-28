import { CardType } from '@constants/image';
import TestCardItem from '../atom/TestCardItem';

interface TestCardListProps {
  selfTestCardList?: string[];
  peerCardList?: string[];
  type: 'self' | 'peer' | 'locked';
  className?: string;
}

export default function TestCardList({
  selfTestCardList,
  peerCardList,
  type,
  className,
}: TestCardListProps) {
  const cardList =
    type === 'self'
      ? selfTestCardList || []
      : type === 'peer'
        ? peerCardList || []
        : Array(4).fill('LOCKED');
  return (
    <section className={`flex gap-2 justify-center ${className}`}>
      {cardList.map((cardType, index) => (
        <TestCardItem key={index} cardType={cardType as CardType} />
      ))}
    </section>
  );
}
