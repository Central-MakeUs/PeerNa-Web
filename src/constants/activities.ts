import HomePage from '@components/pages/home/template/HomePage';
import AppleRedirectPage from '@components/pages/login/template/AppleRedirectPage';
import KakaoRedirectPage from '@components/pages/login/template/KakaoRedirectPage';
import MyPage from '@components/pages/mypage/template/MyPage';
import PeerTypePage from '@components/pages/peerType/template/PeerTypePage';
import PeerDetailPage from '@components/pages/peerDetail/template/PeerDetailPage';
import MorePeerFeedbackPage from '@components/pages/moreFeedback/template/MorePeerFeedbackPage';
import SettingPage from '@components/pages/setting/template/SettingPage';
import MoreFeedbackPage from '@components/pages/moreFeedback/template/MoreFeedbackPage';
import NotificationPage from '@components/pages/notification/template/NotificationPage';
import ProfileEditPage from '@components/pages/profileEdit/template/ProfileEditPage';
import OnBoardPage from '@components/pages/onBoard/template/OnBoardPage';
import PeerPage from '@components/pages/peer/template/PeerPage';
import ProjectPage from '@components/pages/project/template/ProjectPage';
import ProjectCreatePage from '@components/pages/projectCreate/template/ProjectCreatePage';
import ProjectDetailPage from '@components/pages/projectDetail/template/ProjectDetailPage';
import ProjectProposePage from '@components/pages/projectPropose/template/ProjectProposePage';
import ReviewPage from '@components/pages/review/template/ReviewPage';
import ReviewPeerPage from '@components/pages/reviewPeer/template/ReviewPeerPage';
import ReviewResultPage from '@components/pages/reviewResult/template/ReviewResultPage';
import ReviewSelfPage from '@components/pages/reviewSelf/template/ReviewSelfPage';

export const Pages = {
  HomePage,
  PeerTypePage,
  PeerDetailPage,
  MorePeerFeedbackPage,
  PeerPage,
  ProjectPage,
  NotificationPage,
  MyPage,
  SettingPage,
  MoreFeedbackPage,
  ProfileEditPage,
  OnBoardPage,
  ReviewPage,
  ReviewSelfPage,
  ReviewPeerPage,
  ReviewResultPage,
  KakaoRedirectPage,
  AppleRedirectPage,
  ProjectCreatePage,
  ProjectDetailPage,
  ProjectProposePage,
};

export type ActivityTypes = keyof typeof Pages;

export const PageRoutes: Record<keyof typeof Pages, string> = {
  HomePage: '/',
  PeerTypePage: '/peer/type/:type',
  PeerDetailPage: '/peer/:memberId',
  MorePeerFeedbackPage: '/peer/:memberId/feedback',
  PeerPage: '/peer',
  ProjectPage: '/project',
  ProjectCreatePage: '/project/create',
  ProjectProposePage: '/project/propose',
  ProjectDetailPage: '/project/:id',
  NotificationPage: '/notification',
  MyPage: '/mypage',
  MoreFeedbackPage: '/mypage/feedback',
  ProfileEditPage: '/mypage/profile/edit',
  SettingPage: '/mypage/setting',
  OnBoardPage: '/onBoard',
  ReviewPage: '/review',
  ReviewSelfPage: '/review/self',
  ReviewPeerPage: '/review/peer',
  ReviewResultPage: '/review/result',
  KakaoRedirectPage: '/login/kakao',
  AppleRedirectPage: '/login/apple',
};

export const TabItem = {
  HomePage,
  PeerPage,
  ProjectPage,
  NotificationPage,
  MyPage,
};

export type PageTypes = keyof typeof Pages;
export type TabItemTypes = keyof typeof TabItem;
