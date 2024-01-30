import Typography from '@components/common/atom/Typography';
import Project from '@components/common/molecule/Project';
import { useGetProjectList } from '@hooks/api/project/useGetProjectList';
import { useFlow } from '@hooks/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { Fragment } from 'react';

export default function RecentProjectTab() {
  const { push } = useFlow();
  const { data } = useGetProjectList(1);
  console.log(data);
  return (
    <Fragment>
      <Spacer y={5} />
      <Typography variant="caption01" fontColor="gray04" className="text-left">
        최신순
      </Typography>
      <Spacer y={3} />
      <div className="flex flex-col gap-3">
        {Array(10)
          .fill({})
          .map((_, i) => (
            <button
              key={i}
              className="w-full text-left"
              onClick={() => push('ProjectDetailPage', { id: 1 })}
            >
              <Project
                title="프로젝트 제목"
                subtitle="설명글입니다."
                date="2023.12.20 ~ 2023.12.31"
              />
            </button>
          ))}
      </div>
    </Fragment>
  );
}
