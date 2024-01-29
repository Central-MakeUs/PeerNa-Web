import NavigationHeader from '@components/common/molecule/NavigationHeader';
import ProjectInformation from '@components/pages/projectDetail/organism/ProjectInformation';
import ShareDrawer from '@components/pages/reviewResult/molecule/ShareDrawer';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { useFlow } from '@hooks/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';
import { useState } from 'react';

const ProjectDetailPage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const handleClickBackIcon = () => pop({ animate: true });
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const handleClickShare = () => setOpenBottomSheet(true);

  return (
    <AppScreenContainer>
      <NavigationHeader
        backIconProps={{
          isShow: true,
          handleClick: handleClickBackIcon,
        }}
        bodyProps={{
          isShow: true,
          title: '프로젝트 명',
        }}
      />
      <Spacer y={8} />
      <ProjectInformation />
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
