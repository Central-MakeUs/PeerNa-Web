import CommonTestPage from '@components/pages/commonTest/template/CommonTestPage';
import HomePage from '@components/pages/home/template/HomePage';
import MyPage from '@components/pages/mypage/template/MyPage';
import NotificationPage from '@components/pages/notification/template/NotificationPage';
import OnBoardPage from '@components/pages/onBoard/template/OnBoardPage';
import PeerPage from '@components/pages/peer/template/PeerPage';
import PeerReviewPage from '@components/pages/peerReview/template/PeerReviewPage';
import ProjectPage from '@components/pages/project/template/ProjectPage';
import SelfTestPage from '@components/pages/selfTest/template/SelfTestPage';
import TestResultPage from '@components/pages/testResult/template/TestResultPage';

export const Activities = {
  HomePage,
  PeerPage,
  ProjectPage,
  NotificationPage,
  MyPage,
  OnBoard: OnBoardPage,
  SelfTestPage,
  CommonTestPage,
  TestResultPage,
  PeerReviewPage,
};

export type ActivitiesTypes = keyof typeof Activities;
