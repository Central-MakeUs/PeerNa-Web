import Typography from '@components/common/atom/Typography';
import AlarmListItem from '@components/common/molecule/AlarmListItem';
import Project from '@components/common/molecule/Project';
import useGetMyProjectList from '@hooks/api/project/index/useGetMyProjectList';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import EmptyProject from '@pages/project/index/molecule/EmptyProject';
import { Fragment, useEffect, useRef } from 'react';

export default function MyProject() {
  const { push } = useFlow();
  const handlePushCreateProjectPage = () => push('ProjectCreatePage', {});

  const { data, fetchNextPage, hasNextPage, status } = useGetMyProjectList();

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProjectRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (status === 'pending' || !data) return;

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
      <div className="w-full" onClick={handlePushCreateProjectPage}>
        <AlarmListItem
          title="내 프로젝트를 만들어보세요"
          subtitle="원하는 동료들과 함께해요"
        />
      </div>
      <Spacer y={5} />
      <Typography variant="caption01" fontColor="gray04" className="text-left">
        최신순
      </Typography>
      <Spacer y={3} />
      <div className="h-full flex flex-col gap-3">
        {!data && <EmptyProject />}
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
