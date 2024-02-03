import SelectListItem from '@components/common/atom/SelectListItem';
import { JOB_LIST } from '@constants/review';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import { useEffect } from 'react';

export default function SelectJob() {
  const { reviewSelf, handleChangeJob } = useReviewSelfState();

  useEffect(() => {
    handleChangeJob('');
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {JOB_LIST.map(({ title, job }, index) => (
        <SelectListItem
          key={job + index}
          title={title}
          isSelect={reviewSelf.job === job}
          onClick={() => handleChangeJob(job)}
        />
      ))}
    </div>
  );
}
