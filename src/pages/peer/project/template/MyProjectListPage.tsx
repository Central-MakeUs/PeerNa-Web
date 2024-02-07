import Button from '@components/common/atom/Button';
import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import Project from '@components/common/molecule/Project';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetMyProjectList from '@hooks/api/project/index/useGetMyProjectList';
import usePostProjectRespondInvitation from '@hooks/api/project/projectId/usePostProjectRespondInvitation';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';
import { useState } from 'react';

type MyProjectListPageParams = {
  memberId: string;
};

const MyProjectListPage: ActivityComponentType<MyProjectListPageParams> = ({
  params,
}) => {
  const { pop } = useFlow();
  const handleBack = () => pop();
  const memberId = parseInt(params.memberId);

  const { data, fetchNextPage, isFetchingNextPage } = useGetMyProjectList();

  const intersectionRef = useIntersection(fetchNextPage);
  const { mutate } = usePostProjectRespondInvitation();

  const handleInvite = () => {
    if (selectedProjectId) {
      mutate({ projectId: selectedProjectId, peerId: memberId });
    }
  };

  const [selectedProjectId, setSelectedProjectId] = useState<number>();

  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleBack} />
          <Header.Title className="mx-auto">내 프로젝트</Header.Title>
        </Header.TopBar>
      </Header>
      <div className="flex flex-col gap-3 items-start">
        <Typography
          variant="caption01"
          fontColor="gray04"
          className="text-left"
        >
          최신순
        </Typography>
        <Spacer y={3} />
        <div className="flex flex-col gap-3">
          {data?.pages.map(group =>
            group.result.map(project => (
              <button
                key={project.projectId}
                onClick={() => setSelectedProjectId(project.projectId)}
                className="w-full text-left"
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
      </div>
      <Footer bottom={3} className="px-4">
        <Button onClick={handleInvite} isDisabled={!selectedProjectId}>
          초대하기
        </Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default MyProjectListPage;
