import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import PeerRequestCompleteModal from '@components/common/molecule/PeerRequestCompleteModal';
import PeerVerifyModal from '@components/common/molecule/PeerVerifiyModal';
import RadioTabs from '@components/common/molecule/RadioTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Header from '@components/wrapper/Header';
import useGetPeerDetail from '@hooks/api/home/peerId/useGetPeerDetail';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Spacer, Tab } from '@nextui-org/react';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import Layout from '@pages/mypage/index/organism/Layout';
import PeerProfileCard from '@pages/peer/detail/atom/PeerProfileCard';
import PeerCardContent from '@pages/peer/detail/organism/PeerCardContent';
import PeerKeywordContent from '@pages/peer/detail/organism/PeerKeywordContent';
import { ActivityComponentType } from '@stackflow/react';

type peerDetailPageParams = {
  memberId: string;
};

const PeerDetailPage: ActivityComponentType<peerDetailPageParams> = ({
  params,
}) => {
  const memberId = params.memberId;
  const { pop, push } = useFlow();
  const { data: peerInfo } = useGetPeerDetail(parseInt(memberId));
  const { openModal: peerRequestOpen } = useModal('peerVerify');
  const { memberSimpleProfileDto, peerProjectDtoList } = peerInfo;
  const projectId = peerProjectDtoList.map(project => project.projectId);
  const username = memberSimpleProfileDto.name;

  const handleMoreFeedback = () => {
    push('MorePeerFeedbackPage', { memberId: memberId });
  };

  const handleMoreProject = () => {
    push('MorePeerProjectPage', { memberId: memberId });
  };

  const handlePeerProject = () => {
    push('PeerProjectDetailPage', {
      memberId: memberId,
      projectId: projectId.toString(),
    });
  };

  const handleRequestPeerTest = () => {
    peerRequestOpen();
  };

  const handleMyProjectList = () => {
    push('MyProjectListPage', { memberId: memberId });
  };

  const handleBack = () => pop();

  return (
    <AppScreenContainer>
      <div className="bg-peer_detail_bg bg-contain bg-right-top bg-no-repeat w-full relative">
        <Header>
          <Header.TopBar>
            <Header.BackIcon handleClick={handleBack} />
            <Header.Title className="mx-auto">{username}</Header.Title>
            <Header.RightButton text="" handleClick={() => null} />
          </Header.TopBar>
        </Header>
        <PeerProfileCard memberInfo={memberSimpleProfileDto} />
        <Layout>
          <HeaderContainer size="md">
            <Typography variant="header02" fontColor="gray08" className="mb-2">
              {
                '함께 한 동료들이 남긴 \n 피어 테스트 응답을 바탕으로 분석했어요'
              }
            </Typography>
            <Typography variant="body01" fontColor="gray06">
              나와 동료의 협업 유형을 상세하게 비교해보세요
            </Typography>
          </HeaderContainer>
          <RadioTabs>
            <Tab key="me" title="카드비교">
              <PeerCardContent
                data={peerInfo}
                handleMoreFeedback={handleMoreFeedback}
                handleMoreProject={handleMoreProject}
                handlePeerProject={handlePeerProject}
              />
            </Tab>
            <Tab key="peer" title="키워드 비교">
              <PeerKeywordContent
                data={peerInfo}
                handleMoreFeedback={handleMoreFeedback}
                handleMoreProject={handleMoreProject}
                handlePeerProject={handlePeerProject}
              />
            </Tab>
          </RadioTabs>
          <Spacer y={6} />
          <section className="flex flex-col gap-4 py-7 px-4">
            <Button onClick={handleMyProjectList}>
              내 프로젝트에 초대하기
            </Button>
            <Button buttonVariant="secondary" onClick={handleRequestPeerTest}>
              내 피어 테스트 응답 요청하기
            </Button>
            <PeerVerifyModal memberId={parseInt(memberId)} />
            <PeerRequestCompleteModal />
          </section>
        </Layout>
      </div>
    </AppScreenContainer>
  );
};

export default PeerDetailPage;
