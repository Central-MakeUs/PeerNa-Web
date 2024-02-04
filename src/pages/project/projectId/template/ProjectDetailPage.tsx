import NavigationHeader from '@components/common/molecule/NavigationHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
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
      <NavigationHeader
        backIconProps={{
          isShow: true,
          handleClick: handleClickBackIcon,
        }}
        bodyProps={{
          isShow: true,
          title: projectInformation.projectName,
        }}
      />
      <Spacer y={8} />
      <ProjectInformation projectInformation={projectInformation} />
      <FixedBottomButton handleClick={handleClickShare}>
        동료 초대하기
      </FixedBottomButton>
      <ShareDrawer
        openBottomSheet={openBottomSheet}
        setOpenBottomSheet={setOpenBottomSheet}
        handleClickShareLink={() => null}
      />
    </AppScreenContainer>
  );
};

export default ProjectDetailPage;
