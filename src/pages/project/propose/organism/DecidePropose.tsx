import { StackModals } from '@components/common/molecule/Modals';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import { useFlow } from '@hooks/common/useStackFlow';
import ProjectInformation from '@pages/project/projectId/organism/ProjectInformation';
import AcceptButton from '@pages/project/propose/atom/AcceptButton';
import DeclineButton from '@pages/project/propose/atom/DeclineButton';
import { Fragment } from 'react';

interface DecideProposeProps {
  projectId: string;
}

export default function DecidePropose({ projectId }: DecideProposeProps) {
  const { data: projectInformation } = useGetProjectById(Number(projectId));

  const { replace } = useFlow();

  const handleClickBackIcon = () => replace('NotificationPage', {});

  return (
    <Fragment>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleClickBackIcon} />
        </Header.TopBar>
      </Header>
      <ProjectInformation projectInformation={projectInformation} />
      <Footer bottom={3} className="px-4">
        <div className="w-full flex flex-row gap-4">
          <DeclineButton />
          <AcceptButton />
        </div>
      </Footer>
      <StackModals />
    </Fragment>
  );
}
