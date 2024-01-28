import NavigationHeader from '@components/common/molecule/NavigationHeader';
import CheckPropose from '@components/pages/projectPropose/organism/CheckPropose';
import DecidePropose from '@components/pages/projectPropose/organism/DecidePropose';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { ActivityComponentType } from '@stackflow/react';

interface ProjectProposePageParams {
  step: string;
}

const ProjectProposePage: ActivityComponentType<ProjectProposePageParams> = ({
  params: { step },
}) => {
  const curStep = parseInt(step ?? 1);
  const nextStep = String(curStep + 1);
  return (
    <AppScreenContainer>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: 'username님이\n 프로젝트 참여를 제안했어요',
        }}
      />
      {curStep === 1 && <CheckPropose nextStep={nextStep} />}
      {curStep === 2 && <DecidePropose />}
    </AppScreenContainer>
  );
};

export default ProjectProposePage;
