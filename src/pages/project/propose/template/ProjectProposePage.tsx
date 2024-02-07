import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Header from '@components/wrapper/Header';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import CheckPropose from '@pages/project/propose/organism/CheckPropose';
import DecidePropose from '@pages/project/propose/organism/DecidePropose';
import { ActivityComponentType } from '@stackflow/react';

interface ProjectProposePageParams {
  step: string;
  projectId: string;
}

const ProjectProposePage: ActivityComponentType<ProjectProposePageParams> = ({
  params: { step, projectId },
}) => {
  const { data: projectInformation } = useGetProjectById(Number(projectId));
  const curStep = parseInt(step ?? 1);
  const nextStep = String(curStep + 1);

  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar></Header.TopBar>
        <Header.Body>
          <Header.Title>
            {`${projectInformation.creatorSimpleProfileDto.name}님이\n 프로젝트 참여를 제안했어요`}
          </Header.Title>
        </Header.Body>
      </Header>

      {curStep === 1 && (
        <CheckPropose nextStep={nextStep} projectId={projectId} />
      )}
      {curStep === 2 && <DecidePropose projectId={projectId} />}
    </AppScreenContainer>
  );
};

export default ProjectProposePage;
