import Button from '@components/common/atom/Button';
import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Footer from '@components/wrapper/Footer';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import usePostPeerInviteProject from '@hooks/api/project/projectId/usePostPeerInviteProject';
import { useFlow } from '@hooks/common/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';
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
    mutation.mutate({
      projectId: projectId,
      peerId: memberId,
    });
  };
  const { pop } = useFlow();
  const handleBack = () => pop();
  return (
    <AppScreenContainer>
      <TopHeader onClick={handleBack} />
      <div className="w-full">
        {projectInfo && <PeerProjectInfo projectInfo={projectInfo} />}
        <Footer>
          <Button onClick={handleInvitePeer}>동료 초대하기</Button>
        </Footer>
      </div>
    </AppScreenContainer>
  );
};

export default PeerProjectDetailPage;
