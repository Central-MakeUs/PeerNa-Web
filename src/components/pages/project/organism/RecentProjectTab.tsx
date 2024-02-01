import Typography from '@components/common/atom/Typography';
import Project from '@components/common/molecule/Project';
import EmptyProject from '@components/pages/project/molecule/EmptyProject';
import { useGetProjectList } from '@hooks/api/project/useGetProjectList';
import { useFlow } from '@hooks/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { Fragment, useEffect, useRef } from 'react';

export default function RecentProjectTab() {
  const { push } = useFlow();
  const { data, fetchNextPage, hasNextPage, status } = useGetProjectList();
  console.log(data);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProjectRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (status === 'pending') return;

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    }, option);

    if (lastProjectRef.current) {
      observer.current.observe(lastProjectRef.current);
    }

    return () => {
      if (lastProjectRef.current && observer.current) {
        observer.current.unobserve(lastProjectRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage, status]);

  return (
    <Fragment>
      <Spacer y={5} />
      <Typography variant="caption01" fontColor="gray04" className="text-left">
        최신순
      </Typography>
      <Spacer y={3} />
      <div className="flex flex-col gap-3">
        {data?.pages.length === 0 && <EmptyProject />}
        {data?.pages.map(group =>
          group.result.map((project, index) => (
            <button
              key={project.projectId}
              ref={group.result.length === index + 1 ? lastProjectRef : null}
              className="w-full text-left"
              onClick={() =>
                push('ProjectDetailPage', { id: project.projectId })
              }
            >
              <Project
                title={project.projectName}
                subtitle={project.introduce}
                date={`${project.startDate} ~ ${project.endDate}`}
              />
            </button>
          )),
        )}
      </div>
    </Fragment>
  );
}
