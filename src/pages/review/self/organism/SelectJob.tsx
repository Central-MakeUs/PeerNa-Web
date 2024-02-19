import SelectListItem from '@components/common/atom/SelectListItem';
import { JOB_LIST } from '@constants/list';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import { Spacer } from '@nextui-org/react';
import { Fragment, useEffect } from 'react';

export default function SelectJob() {
  const { reviewSelf, handleChangeJob } = useReviewSelfState();

  useEffect(() => {
    handleChangeJob('');
  }, []);

  return (
    <Fragment>
      {JOB_LIST.map(({ key, text }, index) => (
        <div>
          <Spacer y={6} />
          <SelectListItem
            key={key + index}
            title={text}
            isSelect={reviewSelf.job === key}
            onClick={() => handleChangeJob(key)}
          />
          <Spacer y={2} />
        </div>
      ))}
    </Fragment>
  );
}
