import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Modal from '@components/common/molecule/LegacyModal';
import RadioTabs from '@components/common/molecule/RadioTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Header from '@components/wrapper/Header';
import useGetPeerDetail from '@hooks/api/home/peerId/useGetPeerDetail';
import usePostRequestPeerTest from '@hooks/api/review/peerId/usePostRequestPeerTest';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Tab } from '@nextui-org/react';
import Feedback from '@pages/mypage/index/molecule/Feedback';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import NoTestKeywordResult from '@pages/mypage/index/molecule/NoTestKeywordResult';
import OverallOpinion from '@pages/mypage/index/molecule/OverallOpinion';
import OverallScore from '@pages/mypage/index/molecule/OverallScore';
import OverallTestResult from '@pages/mypage/index/molecule/OverallTestResult';
import Layout from '@pages/mypage/index/organism/Layout';
import PeerProfileCard from '@pages/peer/detail/atom/PeerProfileCard';
import PeerTestResult from '@pages/peer/detail/atom/PeerTestResult';
import SelfTestResult from '@pages/peer/detail/atom/SelfTestResult';
import ProjectList from '@pages/peer/detail/molecule/ProjectList';
import { ActivityComponentType } from '@stackflow/react';
import toast from 'react-hot-toast';

type peerDetailPageParams = {
  memberId: string;
};

const PeerDetailPage: ActivityComponentType<peerDetailPageParams> = ({
  params,
}) => {
  const memberId = params.memberId;
  const { pop, push } = useFlow();

  const { data: peerInfo } = useGetPeerDetail(parseInt(memberId));
  const { mutate } = usePostRequestPeerTest();

  const { openModal: peerRequestOpen, closeModal: peerRequestClose } =
    useModal('peerRequest');
  const { openModal: requestCompleteOpen, closeModal: requestCompleteClose } =
    useModal('requestComplete');

  const {
    peerTestMoreThanThree,
    memberSimpleProfileDto,
    peerCardList,
    myCardList,
    myName,
    totalEvaluation,
    totalScore,
    peerFeedbackList,
    peerAnswerIdList,
    colorAnswerIdList,
    peerProjectDtoList,
  } = peerInfo;

  const handleMoreFeedback = () => {
    push('MorePeerFeedbackPage', { memberId: memberId });
  };

  const handleMoreProject = () => {
    push('MorePeerProjectPage', { memberId: memberId });
  };

  const handleRequestPeerTest = () => {
    peerRequestOpen();
  };

  const handleClickAlaramDecline = () => {
    peerRequestClose();
    toast.error(`함께 한 경험이 있는 동료만 \n 피어테스트 요청이 가능합니다`);
  };

  const handleClickAlarmAccept = () => {
    mutate({
      peerId: parseInt(memberId),
    });
    requestCompleteOpen();
  };

  const handleRequestComplete = () => {
    requestCompleteClose();
    peerRequestClose();
  };

  const handleMyProjectList = () => {
    push('MyProjectListPage', { memberId: memberId });
  };

  const username = memberSimpleProfileDto.name;

  const handleBack = () => pop();

  return (
    <AppScreenContainer>
      <div className="bg-peer-bg bg-cover bg-no-repeat w-full relative">
        <Header>
          <Header.TopBar>
            <Header.BackIcon handleClick={handleBack} />
            <Header.Title className="mx-auto">{username}</Header.Title>
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
              <PeerTestResult user={username} peerCardList={peerCardList} />
              <SelfTestResult myName={myName} myCardList={myCardList} />
              {Array.isArray(totalEvaluation) &&
                peerTestMoreThanThree === true && (
                  <OverallOpinion totalEvaluation={totalEvaluation} />
                )}
              {peerTestMoreThanThree && totalScore && (
                <OverallScore totalScore={totalScore} />
              )}
              {peerTestMoreThanThree && peerFeedbackList && (
                <Feedback
                  peerFeedbackList={peerFeedbackList}
                  handleClick={handleMoreFeedback}
                />
              )}
              {peerProjectDtoList && (
                <ProjectList
                  projectList={peerProjectDtoList}
                  handleClick={handleMoreProject}
                />
              )}
            </Tab>
            <Tab key="peer" title="키워드 비교">
              {peerTestMoreThanThree && (
                <OverallTestResult
                  colorAnswerIdList={colorAnswerIdList}
                  selfTestAnswerIdList={peerAnswerIdList}
                  peerCardList={peerCardList}
                  type="peer"
                />
              )}
              {!peerTestMoreThanThree && <NoTestKeywordResult type="peer" />}
            </Tab>
          </RadioTabs>
          <section className="flex flex-col gap-4 pt-7 pb-5">
            <Button onClick={handleMyProjectList}>
              내 프로젝트에 초대하기
            </Button>
            <Button buttonVariant="secondary" onClick={handleRequestPeerTest}>
              내 피어 테스트 응답 요청하기
            </Button>
            <Modal
              type="peerRequest"
              modalHeader="함께 한 경험이 있는 동료인가요?"
              footer={
                <ButtonContainer direction="row">
                  <Button
                    buttonVariant="tertiary"
                    onClick={handleClickAlaramDecline}
                  >
                    아니요
                  </Button>
                  <Button onClick={handleClickAlarmAccept}>네</Button>
                </ButtonContainer>
              }
            />
            <Modal
              type="requestComplete"
              modalHeader="응답 요청 완료"
              modalBody={`응답에 따라 마이페이지 분석 결과가 \n 업데이트 돼요.`}
              footer={
                <ButtonContainer direction="row">
                  <Button onClick={handleRequestComplete}>확인</Button>
                </ButtonContainer>
              }
            />
          </section>
        </Layout>
      </div>
    </AppScreenContainer>
  );
};

export default PeerDetailPage;
