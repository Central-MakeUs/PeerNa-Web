import SelectListItem from '@components/common/atom/SelectListItem';
import { POSITION_LIST } from '@constants/review';
import useReviewSelfState from '@hooks/useReviewSelfState';
import { useEffect } from 'react';

export default function SelectPosition() {
  const { reviewSelf, handleChangePart } = useReviewSelfState();

  useEffect(() => {
    handleChangePart('');
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {POSITION_LIST.map((part, index) => (
        <SelectListItem
          key={part + index}
          title={part}
          isSelect={reviewSelf.part === part}
          onClick={() => handleChangePart(part)}
        />
      ))}
    </div>
  );
}
