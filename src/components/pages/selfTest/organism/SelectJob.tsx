import SelectListItem from '@components/common/atom/SelectListItem';
import { jobList } from '@constants/selfTest';
import useSelfTestInformation from '@hooks/useSelfTestInformation';
import { useEffect } from 'react';

export default function SelectJob() {
  const { selfTest, handleChangeJob } = useSelfTestInformation();

  useEffect(() => {
    handleChangeJob('');
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {jobList.map((job, index) => (
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
