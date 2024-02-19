import Button from '@components/common/atom/Button';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { PROJECT_REQUEST, PROJECT_TITLE, PROJECT_URL } from '@constants/share';
import useGetMe from '@hooks/api/member/index/useGetMe';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import usePostProjectRequestJoin from '@hooks/api/project/projectId/usePostProjectRequestJoin';
import useShareLink from '@hooks/common/useShareLink';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import ProjectInformation from '@pages/project/projectId/organism/ProjectInformation';
import ShareDrawer from '@pages/review/result/molecule/ShareDrawer';
import { ActivityComponentType, useActivity } from '@stackflow/react';
import { useState } from 'react';

type ProjectDetailPageParams = {
  id: string;
  type: string;
};

const ProjectDetailPage: ActivityComponentType<ProjectDetailPageParams> = ({
  params,
}) => {
  const { id, type } = params;
  const { pop } = useFlow();
  const handleClickBackIcon = () => pop({ animate: true });
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const { data: user } = useGetMe();
  const username = user?.name ?? '';
  const { mutate } = usePostProjectRequestJoin();
  const handleClickJoinProject = () => mutate(id);
  const handleClickShare = () => setOpenBottomSheet(true);
  const { handleSendKakaoMessage, handleShareLink } = useShareLink();

  const activity = useActivity();
  const { data: projectInformation } = useGetProjectById(
    parseInt(activity.params?.id ?? '0'),
  );

  const handleKakaoShare = () => {
    handleSendKakaoMessage({
      ...PROJECT_REQUEST,
      title: PROJECT_TITLE(username),
      url: PROJECT_URL(parseInt(params.id)),
    });
  };

  const handleCopyLink = () => {
    handleShareLink({
      type: 'project',
      id: parseInt(params.id),
    });
  };

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
      <Footer bottom={5} className="px-4">
        {type === 'other' && (
          <Button onClick={handleClickJoinProject}>참가 신청하기</Button>
        )}
        {type === 'my' && (
          <Button onClick={handleClickShare}>동료 초대하기</Button>
        )}
      </Footer>
      <ShareDrawer
        openBottomSheet={openBottomSheet}
        setOpenBottomSheet={setOpenBottomSheet}
        handleClickShareLink={handleCopyLink}
        handleClickKakaoShare={handleKakaoShare}
      />
    </AppScreenContainer>
  );
};

export default ProjectDetailPage;
