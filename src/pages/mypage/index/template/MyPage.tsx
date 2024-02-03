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
import OverallScore from '../molecule/OverallScore';
import Feedback from '../molecule/Feedback';
import { useGetMyPageInfo } from '@hooks/api/useGetMypageInfo';
import NoTestKeywordResult from '../molecule/NoTestKeywordResult';
import NoPeerTestResult from '../molecule/NoPeerTestResult';
import Button from '@components/common/atom/Button';
import SaveImageButton from '../atom/SaveImageButton';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import { Tab } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';
import { useFlow } from '@hooks/useStackFlow';

const Mypage: ActivityComponentType = () => {
  const { data } = useGetMyPageInfo();

  const {
    peerTestMoreThanTree,
    memberMyPageInfoDto,
    selfTestCardList,
    peerCardList,
    totalEvaluation,
    totalScore,
    colorAnswerIdList,
    selfTestAnswerIdList,
    peerFeedbackList,
  } = data;

  const { push } = useFlow();

  const handleMoreFeedback = () => {
    push('MoreFeedbackPage', {});
  };

  return (
    <AppScreenContainer>
      <div className="w-full h-screen bg-gray07">
        <Header />
        {memberMyPageInfoDto && (
          <ProfileCard memberInfo={memberMyPageInfoDto} />
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
              {Array.isArray(totalEvaluation) && totalEvaluation.length > 0 && (
                <OverallOpinion totalEvaluation={totalEvaluation} />
              )}
              {totalScore && <OverallScore totalScore={totalScore} />}
              {peerFeedbackList && (
                <Feedback
                  peerFeedbackList={peerFeedbackList}
                  handleClick={handleMoreFeedback}
                />
              )}
            </Tab>
            <Tab key="peer" title="키워드 비교">
              {colorAnswerIdList && selfTestAnswerIdList && (
                <OverallTestResult
                  colorAnswerIdList={colorAnswerIdList}
                  selfTestAnswerIdList={selfTestAnswerIdList}
                  peerCardList={peerCardList}
                  type="self"
                />
              )}
              {peerTestMoreThanTree === false && <NoTestKeywordResult />}
              {Array.isArray(totalEvaluation) && totalEvaluation.length > 0 && (
                <OverallOpinion totalEvaluation={totalEvaluation} />
              )}
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
          <BottomNavigation />
        </Layout>
      </div>
    </AppScreenContainer>
  );
};

export default Mypage;
