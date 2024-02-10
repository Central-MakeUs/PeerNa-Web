import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import usePostProjectRequestJoin from '@hooks/api/project/projectId/usePostProjectRequestJoin';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import ProjectInformation from '@pages/project/projectId/organism/ProjectInformation';
import ShareDrawer from '@pages/review/result/molecule/ShareDrawer';
import { ActivityComponentType, useActivity } from '@stackflow/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

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

  const { mutate } = usePostProjectRequestJoin();
  const handleClickJoinProject = () => mutate(id);
  const handleClickShare = () => setOpenBottomSheet(true);

  const activity = useActivity();
  const { data: projectInformation } = useGetProjectById(
    parseInt(activity.params?.id ?? '0'),
  );

  const handleClickShareLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/project/${id}/propose`,
      );
      toast.success('링크 복사 완료!', {
        icon: <SvgIcon id="Complete" color="gray08" />,
      });
    } catch (err) {
      console.log(err);
    }
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
      <Footer bottom={3} className="px-4">
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
        handleClickShareLink={handleClickShareLink}
      />
    </AppScreenContainer>
  );
};

export default ProjectDetailPage;
