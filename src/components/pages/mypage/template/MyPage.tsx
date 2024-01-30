import Button from '@components/common/atom/Button';
import Spinner from '@components/common/atom/Spinner';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import RadioTabs from '@components/common/molecule/RadioTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { useGetMyPageInfo } from '@hooks/api/useGetMypageInfo';
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
import Header from '../organism/Header';
import Layout from '../organism/Layout';

const Mypage: ActivityComponentType = () => {
  const { data: mypageInfo, isLoading, isError } = useGetMyPageInfo();

  if (isLoading) {
    return (
      <AppScreenContainer>
        <Spinner />
      </AppScreenContainer>
    );
  }

  if (isError || !mypageInfo) {
    return (
      <AppScreenContainer>
        <div>에러 발생!</div>
      </AppScreenContainer>
    );
  }

  const {
    peerTestMoreThanTree,
    memberSimpleInfoDto,
    selfTestCardList,
    peerCardList,
    totalEvaluation,
    totalScore,
    colorAnswerIdList,
    selfTestAnswerIdList,
    peerFeedbackList,
  } = mypageInfo;

  console.log(mypageInfo);

  return (
    <AppScreenContainer>
      <div className="w-full h-screen bg-gray07">
        <Header />
        {memberSimpleInfoDto && (
          <ProfileCard memberInfo={memberSimpleInfoDto} />
        )}
        <Layout>
          <CardTestResult />
          <RadioTabs>
            <Tab key="me" title="카드 비교">
              {selfTestCardList && (
                <SelfTestResult selfTestCardList={selfTestCardList} />
              )}
              {peerCardList ? (
                <PeerTestResult peerCardList={peerCardList} />
              ) : (
                <NoPeerTestResult />
              )}
              {Array.isArray(totalEvaluation) && (
                <OverallOpinion totalEvaluation={totalEvaluation} />
              )}
              {totalScore && <OverallScore totalScore={totalScore} />}
              {peerFeedbackList && (
                <Feedback peerFeedbackList={peerFeedbackList} />
              )}
            </Tab>
            <Tab key="peer" title="키워드 비교">
              {colorAnswerIdList && selfTestAnswerIdList && (
                <OverallTestResult
                  colorAnswerIdList={colorAnswerIdList}
                  selfTestAnswerIdList={selfTestAnswerIdList}
                />
              )}
              {peerTestMoreThanTree === false && <NoTestKeywordResult />}
              {Array.isArray(totalEvaluation) && (
                <OverallOpinion totalEvaluation={totalEvaluation} />
              )}
              {totalScore && <OverallScore totalScore={totalScore} />}
              {peerFeedbackList && (
                <Feedback peerFeedbackList={peerFeedbackList} />
              )}
            </Tab>
          </RadioTabs>
          <Button buttonVariant="primary" className="my-[40px]">
            동료에서 물어보기
          </Button>
          <SaveImageButton />

          <BottomNavigation />
        </Layout>
      </div>
    </AppScreenContainer>
  );
};

export default Mypage;
