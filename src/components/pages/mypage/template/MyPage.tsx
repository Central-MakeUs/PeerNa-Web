import Header from '../organism/Header';
import ProfileCard from '../molecule/ProfileCard';
import Layout from '../organism/Layout';
import CardTestResult from '../molecule/CardTestResult';
import SelfTestResult from '../molecule/SelfTestResult';
import PeerTestResult from '../molecule/PeerTestResult';
import OverallTestResult from '../molecule/OverallTestResult';
import OverallOpinion from '../molecule/OverallOpinion';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import RadioTabs from '@components/common/molecule/RadioTabs';
import { Tab } from '@nextui-org/react';
import OverallScore from '../molecule/OverallScore';
import Feedback from '../molecule/Feedback';
import { useMyPageInfo } from '@hooks/query/useMyPageInfo';
import NoTestKeywordResult from '../molecule/NoTestKeywordResult';
import NoPeerTestResult from '../molecule/NoPeerTestResult';
import Spinner from '@components/common/atom/Spinner';
import Button from '@components/common/atom/Button';
import SaveImageButton from '../atom/SaveImageButton';

export default function Mypage() {
  const { data: mypageInfo, isLoading, isError } = useMyPageInfo();

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
        </Layout>
      </div>
    </AppScreenContainer>
  );
}
