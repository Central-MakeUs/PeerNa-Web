import SelectListItem from '@components/common/atom/SelectListItem';
import { PART_LIST } from '@constants/review';
import useReviewSelfState from '@hooks/useReviewSelfState';
import { useEffect } from 'react';

export default function SelectPosition() {
  const { reviewSelf, handleChangePart } = useReviewSelfState();

  useEffect(() => {
    handleChangePart('');
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {PART_LIST.map(({ title, part }) => (
        <SelectListItem
          key={part}
          title={title}
          isSelect={reviewSelf.part === part}
          onClick={() => handleChangePart(part)}
        />
      ))}
    </div>
  );
}
