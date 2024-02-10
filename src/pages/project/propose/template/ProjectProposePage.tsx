import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import CheckPropose from '@pages/project/propose/organism/CheckPropose';
import DecidePropose from '@pages/project/propose/organism/DecidePropose';
import { ActivityComponentType } from '@stackflow/react';

interface ProjectProposePageParams {
  id: string;
  step: string;
}

const ProjectProposePage: ActivityComponentType<ProjectProposePageParams> = ({
  params: { id, step },
}) => {
  const curStep = parseInt(step ?? 1);
  const nextStep = String(curStep + 1);

  return (
    <AppScreenContainer>
      {curStep === 1 && (
        <ErrorBoundaryWithSuspense>
          <CheckPropose nextStep={nextStep} id={id} />
        </ErrorBoundaryWithSuspense>
      )}
      {curStep === 2 && (
        <ErrorBoundaryWithSuspense>
          <DecidePropose projectId={id} />
        </ErrorBoundaryWithSuspense>
      )}
    </AppScreenContainer>
  );
};

export default ProjectProposePage;
