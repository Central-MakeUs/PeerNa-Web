import Button from '@components/common/atom/Button';
import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import Project from '@components/common/molecule/Project';
import ProjectInviteModal from '@components/common/molecule/ProjectInviteModal';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetMyProjectList from '@hooks/api/project/index/useGetMyProjectList';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Spacer } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';
import { ProjectIdStateType, projectIdState } from '@store/projectId';
import { useRecoilState } from 'recoil';

type MyProjectListPageParams = {
  memberId: string;
};

const MyProjectListPage: ActivityComponentType<MyProjectListPageParams> = ({
  params,
}) => {
  const { pop } = useFlow();
  const handleBack = () => pop();
  const memberId = parseInt(params.memberId);
  console.log(memberId);
  const { openModal } = useModal('projectInvite');

  const { data, fetchNextPage, isFetchingNextPage } = useGetMyProjectList();

  const intersectionRef = useIntersection(fetchNextPage);

  const handleInvite = () => {
    openModal();
  };

  const [selectedProjectId, setSelectedProjectId] =
    useRecoilState<ProjectIdStateType>(projectIdState);

  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleBack} />
          <Header.Title className="mx-auto">내 프로젝트</Header.Title>
          <Header.RightButton text="" handleClick={() => null} />
        </Header.TopBar>
      </Header>
      <Content>
        <div className="w-full flex flex-col justify-start px-4">
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
                  onClick={() =>
                    setSelectedProjectId(prevState => ({
                      ...prevState,
                      projectId: project.projectId,
                    }))
                  }
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
      </Content>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleInvite} isDisabled={!selectedProjectId}>
          초대하기
        </Button>
        {selectedProjectId && <ProjectInviteModal />}
      </Footer>
    </AppScreenContainer>
  );
};

export default MyProjectListPage;
