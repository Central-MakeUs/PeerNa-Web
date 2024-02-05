import SelectListItem from '@components/common/atom/SelectListItem';
import { JOB_LIST } from '@constants/list';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import { useEffect } from 'react';

export default function SelectJob() {
  const { reviewSelf, handleChangeJob } = useReviewSelfState();

  useEffect(() => {
    handleChangeJob('');
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {JOB_LIST.map(({ key, text }, index) => (
        <SelectListItem
          key={key + index}
          title={text}
          isSelect={reviewSelf.job === key}
          onClick={() => handleChangeJob(key)}
        />
      ))}
    </div>
  );
}
