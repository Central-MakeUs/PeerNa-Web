import SelectListItem from '@components/common/atom/SelectListItem';
import { PART_LIST } from '@constants/list';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import { Fragment, useEffect } from 'react';

export default function SelectPosition() {
  const { reviewSelf, handleChangePart } = useReviewSelfState();

  useEffect(() => {
    handleChangePart('');
  }, []);

  return (
    <Fragment>
      {PART_LIST.map(part => (
        <SelectListItem
          key={part.key}
          title={part.text}
          isSelect={reviewSelf.part === part.key}
          onClick={() => handleChangePart(part.key)}
        />
      ))}
    </Fragment>
  );
}
