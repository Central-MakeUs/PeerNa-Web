import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import { useGetPeerProjectInfo } from '@hooks/api/useGetPeerProjectInfo';
import { usePostPeerInviteProject } from '@hooks/api/usePostPeerInviteProject';
import { useFlow } from '@hooks/useStackFlow';
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

  const { data: projectInfo } = useGetPeerProjectInfo(projectId);

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
        <FixedButtonContainer direction="row">
          <FixedBottomButton handleClick={handleInvitePeer}>
            동료 초대하기
          </FixedBottomButton>
        </FixedButtonContainer>
      </div>
    </AppScreenContainer>
  );
};

export default PeerProjectDetailPage;
