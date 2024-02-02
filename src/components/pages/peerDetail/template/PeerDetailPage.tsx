import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { ActivityComponentType } from '@stackflow/react';
import { useGetPeerDetail } from '@hooks/api/useGetPeerDetail';
import { useFlow } from '@hooks/useStackFlow';
import TopHeader from '@components/common/organism/TopHeader';
import PeerProfileCard from 'components/pages/peerDetail/atom/PeerProfileCard';
import Layout from '@components/pages/mypage/organism/Layout';
import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import Typography from '@components/common/atom/Typography';
import RadioTabs from '@components/common/molecule/RadioTabs';
import { Tab } from '@nextui-org/react';
import PeerTestResult from '@components/pages/peerDetail/atom/PeerTestResult';
import SelfTestResult from '@components/pages/peerDetail/atom/SelfTestResult';
import OverallOpinion from '@components/pages/mypage/molecule/OverallOpinion';
import OverallScore from '@components/pages/mypage/molecule/OverallScore';
import Feedback from '@components/pages/mypage/molecule/Feedback';
import OverallTestResult from '@components/pages/mypage/molecule/OverallTestResult';
import Button from '@components/common/atom/Button';
import NoTestKeywordResult from '@components/pages/mypage/molecule/NoTestKeywordResult';
import ProjectList from '@components/pages/peerDetail/molecule/ProjectList';

type peerDetailPageParams = {
  memberId: string;
};

const PeerDetailPage: ActivityComponentType<peerDetailPageParams> = ({
  params,
}) => {
  const memberId = params.memberId;
  const { pop, push } = useFlow();

  const { data: peerInfo } = useGetPeerDetail(parseInt(memberId));

  const {
    peerTestMoreThanThree,
    memberSimpleProfileDto,
    peerCardList,
    myCardList,
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

  const username = memberSimpleProfileDto.name;

  const handleBack = () => pop();

  return (
    <AppScreenContainer>
      <div className="bg-slate-300 w-full">
        <TopHeader title={username} onClick={handleBack} />
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
              <SelfTestResult myCardList={myCardList} />
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
                  peerProjectDtoList={peerProjectDtoList}
                  handleClick={handleMoreProject}
                />
              )}
            </Tab>
            <Tab key="peer" title="키워드 비교">
              {colorAnswerIdList ? (
                <OverallTestResult
                  colorAnswerIdList={colorAnswerIdList}
                  selfTestAnswerIdList={peerAnswerIdList}
                  peerCardList={peerCardList}
                  type="peer"
                />
              ) : (
                <NoTestKeywordResult />
              )}
            </Tab>
          </RadioTabs>
          <Button className="mb-4">내 프로젝트에 초대하기</Button>
          <Button buttonVariant="secondary">
            내 피어 테스트 응답 요청하기
          </Button>
        </Layout>
      </div>
    </AppScreenContainer>
  );
};

export default PeerDetailPage;
