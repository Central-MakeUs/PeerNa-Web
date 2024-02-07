import Button from '@components/common/atom/Button';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import ProjectInformation from '@pages/project/projectId/organism/ProjectInformation';
import ShareDrawer from '@pages/review/result/molecule/ShareDrawer';
import { ActivityComponentType, useActivity } from '@stackflow/react';
import { useState } from 'react';

const ProjectDetailPage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const handleClickBackIcon = () => pop({ animate: true });
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const handleClickShare = () => setOpenBottomSheet(true);

  const activity = useActivity();
  const { data: projectInformation } = useGetProjectById(
    parseInt(activity.params?.id ?? '0'),
  );
  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleClickBackIcon} />
        </Header.TopBar>
        <Header.Body>
          <Header.Title>{projectInformation.projectName}</Header.Title>
        </Header.Body>
      </Header>
      <Content>
        <Spacer y={8} />
        <ProjectInformation projectInformation={projectInformation} />
        <Spacer y={16} />
      </Content>
      <Footer bottom={3} className="px-4">
        <Button onClick={handleClickShare}>동료 초대하기</Button>
      </Footer>
      <ShareDrawer
        openBottomSheet={openBottomSheet}
        setOpenBottomSheet={setOpenBottomSheet}
        handleClickShareLink={() => null}
      />
    </AppScreenContainer>
  );
};

export default ProjectDetailPage;
