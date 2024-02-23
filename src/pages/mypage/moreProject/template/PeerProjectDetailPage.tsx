import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import usePostPeerInviteProject from '@hooks/api/project/projectId/usePostPeerInviteProject';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';
import toast from 'react-hot-toast';
import PeerProjectInfo from '../molecule/PeerProjectInfo';

type PeerProjectDetailPageParams = {
  projectId: string;
  memberId: string;
};

const PeerProjectDetailPage: ActivityComponentType<
  PeerProjectDetailPageParams
> = ({ params }) => {
  const projectId = parseInt(params.projectId);
  const memberId = parseInt(params.memberId);

  const { data: projectInfo } = useGetProjectById(projectId);

  const mutation = usePostPeerInviteProject();

  const handleInvitePeer = () => {
    mutation.mutate(
      {
        projectId: projectId,
        peerId: memberId,
      },
      {
        onSuccess: () => {
          toast.success('초대 완료!', {
            icon: <SvgIcon id="Complete" color="gray08" />,
          });
        },
      },
    );
  };
  const { pop } = useFlow();
  const handleBack = () => pop();
  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleBack} />
        </Header.TopBar>
        <Header.Body>
          <Header.Title>{projectInfo.projectName}</Header.Title>
        </Header.Body>
      </Header>
      <Content>
        <Spacer y={8} />
        {projectInfo && <PeerProjectInfo projectInfo={projectInfo} />}
      </Content>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleInvitePeer}>동료 초대하기</Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default PeerProjectDetailPage;
