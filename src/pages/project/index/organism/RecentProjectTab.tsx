import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import Project from '@components/common/molecule/Project';
import useGetProjectList from '@hooks/api/project/index/useGetProjectList';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import EmptyProject from '@pages/project/index/molecule/EmptyProject';
import { Fragment } from 'react';

export default function RecentProjectTab() {
  const { push } = useFlow();
  const { data, fetchNextPage, isFetchingNextPage } = useGetProjectList();

  const intersectionRef = useIntersection(fetchNextPage);

  const handleClickProjectDetail = (id: string) => {
    push('ProjectDetailPage', { id, type: 'other' });
  };

  return (
    <Fragment>
      <Spacer y={5} />
      <Typography variant="caption01" fontColor="gray04" className="text-left">
        최신순
      </Typography>
      <Spacer y={3} />
      <div className="h-full flex flex-col gap-3">
        {data?.pages.every(group => group.result.length === 0) ? (
          <div className="w-full h-[calc(100%-200px)] flex items-center justify-center">
            <EmptyProject />
          </div>
        ) : (
          data?.pages.map(group =>
            group.result.map(project => (
              <button
                key={project.projectId}
                className="w-full text-left"
                onClick={() =>
                  handleClickProjectDetail(String(project.projectId))
                }
              >
                <Project
                  title={project.projectName}
                  subtitle={project.introduce}
                  date={`${project.startDate} ~ ${project.endDate}`}
                />
              </button>
            )),
          )
        )}
        <IntersectionBox ref={intersectionRef} />
        {isFetchingNextPage && <Spinner />}
      </div>
    </Fragment>
  );
}
