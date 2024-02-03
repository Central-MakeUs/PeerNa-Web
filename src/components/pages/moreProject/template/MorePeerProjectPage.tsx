import TopHeader from '@components/common/organism/TopHeader';
import { useGetMorePeerProject } from '@hooks/api/useGetMorePeerProjectList';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Project from '@components/common/molecule/Project';
import Spinner from '@components/common/atom/Spinner';
import { useFlow } from '@hooks/useStackFlow';
import useIntersection from '@hooks/useIntersection';
import { ActivityComponentType } from '@stackflow/react';
import IntersectionBox from '@components/common/atom/IntersectionBox';

type MorePeerProjectPageParams = {
  memberId: string;
};

const MorePeerProjectPage: ActivityComponentType<MorePeerProjectPageParams> = ({
  params,
}) => {
  const peerId = params.memberId;

  const { data, fetchNextPage, isFetchingNextPage } =
    useGetMorePeerProject(peerId);

  const { pop, push } = useFlow();
  const handleClick = () => pop();
  const handleProjectDetail = (projectId: string) => {
    push('PeerProjectDetailPage', { projectId: projectId, memberId: peerId });
  };

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <TopHeader title="참여 프로젝트" onClick={handleClick} />
      <ul className="w-full flex flex-col gap-3 px-[24px] py-[20px]">
        {data?.pages.map(item =>
          item?.result.projectList?.map(project => (
            <li key={project.projectId}>
              <Project
                title={project.projectName}
                subtitle={project.introduce}
                date={`${project.startDate} ~ ${project.endDate}`}
                handleClick={() =>
                  handleProjectDetail(project.projectId.toString())
                }
              />
            </li>
          )),
        )}
      </ul>
      <IntersectionBox ref={intersectionRef} />
      {isFetchingNextPage && <Spinner />}
    </AppScreenContainer>
  );
};

export default MorePeerProjectPage;
