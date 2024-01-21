import SelectListItem from '@components/common/atom/SelectListItem';
import { JOB_LIST } from '@constants/review';
import useSelfTestInformation from '@hooks/useReviewSelfState';
import { useEffect } from 'react';

export default function SelectJob() {
  const { selfTest, handleChangeJob } = useSelfTestInformation();

  useEffect(() => {
    handleChangeJob('');
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {JOB_LIST.map((job, index) => (
        <SelectListItem
          key={job + index}
          title={job}
          isSelect={selfTest.job === job}
          onClick={() => handleChangeJob(job)}
        />
      ))}
    </div>
  );
}
