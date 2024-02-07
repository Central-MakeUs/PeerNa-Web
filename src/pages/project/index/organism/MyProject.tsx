import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import AlarmListItem from '@components/common/molecule/AlarmListItem';
import Project from '@components/common/molecule/Project';
import useGetMyProjectList from '@hooks/api/project/index/useGetMyProjectList';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import EmptyProject from '@pages/project/index/molecule/EmptyProject';
import { Fragment } from 'react';

export default function MyProject() {
  const { push } = useFlow();
  const handlePushCreateProjectPage = () => push('ProjectCreatePage', {});

  const { data, fetchNextPage, isFetchingNextPage } = useGetMyProjectList();

  const intersectionRef = useIntersection(fetchNextPage);

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
          group.result.map(project => (
            <button
              key={project.projectId}
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
        <IntersectionBox ref={intersectionRef} />

        {isFetchingNextPage && <Spinner />}
      </div>
    </Fragment>
  );
}
