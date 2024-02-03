import { useState } from 'react';

type FullBleedType = 'showMore' | 'fold';

interface UseShowMore {
  visibleItems: number;
  fullBleedType: FullBleedType;
  handleShowMore: (itemsToShow: number) => void;
}

interface UseShowMoreFeedbackProps {
  initialVisibleItems: number;
}

export default function useShowMoreFeedback({
  initialVisibleItems,
}: UseShowMoreFeedbackProps): UseShowMore {
  const [visibleItems, setVisibleItems] = useState<number>(initialVisibleItems);
  const [fullBleedType, setFullBleedType] = useState<FullBleedType>('showMore');

  const handleShowMore = (itemsToShow: number) => {
    setVisibleItems(prevVisibleItems =>
      prevVisibleItems === initialVisibleItems
        ? itemsToShow
        : initialVisibleItems,
    );
    setFullBleedType(prevType =>
      prevType === 'showMore' ? 'fold' : 'showMore',
    );
  };

  return { visibleItems, fullBleedType, handleShowMore };
}
