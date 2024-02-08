import Button from '@components/common/atom/Button';
import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import RadioTabs from '@components/common/molecule/RadioTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetMyPageInfo from '@hooks/api/member/index/useGetMypageInfo';
import { useFlow } from '@hooks/common/useStackFlow';
import { Tab } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';
import SaveImageButton from '../atom/SaveImageButton';
import CardTestResult from '../molecule/CardTestResult';
import Feedback from '../molecule/Feedback';
import NoPeerTestResult from '../molecule/NoPeerTestResult';
import NoTestKeywordResult from '../molecule/NoTestKeywordResult';
import OverallOpinion from '../molecule/OverallOpinion';
import OverallScore from '../molecule/OverallScore';
import OverallTestResult from '../molecule/OverallTestResult';
import PeerTestResult from '../molecule/PeerTestResult';
import ProfileCard from '../molecule/ProfileCard';
import SelfTestResult from '../molecule/SelfTestResult';
import Layout from '../organism/Layout';

const MyPage: ActivityComponentType = () => {
  const { data } = useGetMyPageInfo();

  const {
    peerTestMoreThanThree,
    memberMyPageInfoDto,
    selfTestCardList,
    peerTestCount,
    peerTestType,
    peerCardList,
    totalEvaluation,
    totalScore,
    colorAnswerIdList,
    selfTestAnswerIdList,
    peerFeedbackList,
  } = data;

  const { push } = useFlow();
  const selfTestType = memberMyPageInfoDto.testType;

  const handleMoreFeedback = () => {
    push('MoreFeedbackPage', {});
  };

  const handleSetting = () => {
    push('SettingPage', {});
  };

  return (
    <AppScreenContainer>
      <div className="w-full h-screen bg-gray07">
        <Content>
          <Header>
            <Header.TopBar>
              <Typography variant="header01" as="h1" fontColor="white">
                마이페이지
              </Typography>
              <IconButton
                onClick={handleSetting}
                iconProps={{
                  id: 'Menu',
                  color: 'white',
                }}
              ></IconButton>
            </Header.TopBar>
          </Header>
          <ErrorBoundaryWithSuspense>
            {memberMyPageInfoDto && (
              <ProfileCard memberInfo={memberMyPageInfoDto} />
            )}
          </ErrorBoundaryWithSuspense>
          <Layout>
            <ErrorBoundaryWithSuspense>
              <CardTestResult
                peerTestCount={peerTestCount}
                peerTestType={peerTestType}
                selfTestType={selfTestType}
              />
            </ErrorBoundaryWithSuspense>
            <RadioTabs>
              <Tab key="me" title="카드 비교">
                <ErrorBoundaryWithSuspense>
                  {selfTestCardList && (
                    <SelfTestResult selfTestCardList={selfTestCardList} />
                  )}
                </ErrorBoundaryWithSuspense>
                <ErrorBoundaryWithSuspense>
                  {peerCardList && (
                    <PeerTestResult peerCardList={peerCardList} />
                  )}
                </ErrorBoundaryWithSuspense>
                {!peerCardList && <NoPeerTestResult />}
                <ErrorBoundaryWithSuspense>
                  {Array.isArray(totalEvaluation) &&
                    totalEvaluation.length > 0 && (
                      <OverallOpinion totalEvaluation={totalEvaluation} />
                    )}
                </ErrorBoundaryWithSuspense>
                <ErrorBoundaryWithSuspense>
                  {totalScore && totalScore !== 0 && (
                    <OverallScore totalScore={totalScore} />
                  )}
                </ErrorBoundaryWithSuspense>
                <ErrorBoundaryWithSuspense>
                  {peerFeedbackList && (
                    <Feedback
                      peerFeedbackList={peerFeedbackList}
                      handleClick={handleMoreFeedback}
                    />
                  )}
                </ErrorBoundaryWithSuspense>
              </Tab>
              <Tab key="peer" title="키워드 비교">
                <ErrorBoundaryWithSuspense>
                  {colorAnswerIdList && selfTestAnswerIdList && (
                    <OverallTestResult
                      colorAnswerIdList={colorAnswerIdList}
                      selfTestAnswerIdList={selfTestAnswerIdList}
                      peerCardList={peerCardList}
                      type="self"
                    />
                  )}
                </ErrorBoundaryWithSuspense>
                {peerTestMoreThanThree === false && <NoTestKeywordResult />}
                <ErrorBoundaryWithSuspense>
                  {Array.isArray(totalEvaluation) &&
                    totalEvaluation.length > 0 && (
                      <OverallOpinion totalEvaluation={totalEvaluation} />
                    )}
                </ErrorBoundaryWithSuspense>
                {totalScore && <OverallScore totalScore={totalScore} />}
                {peerFeedbackList && (
                  <Feedback
                    peerFeedbackList={peerFeedbackList}
                    handleClick={handleMoreFeedback}
                  />
                )}
              </Tab>
            </RadioTabs>
            <Button buttonVariant="primary" className="my-[40px]">
              동료에서 물어보기
            </Button>
            <SaveImageButton />
          </Layout>
        </Content>
        <Footer>
          <BottomNavigation />
        </Footer>
      </div>
    </AppScreenContainer>
  );
};

export default MyPage;
