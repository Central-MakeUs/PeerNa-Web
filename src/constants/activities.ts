import HomePage from '@components/pages/home/template/HomePage';
import RedirectPage from '@components/pages/login/template/RedirectPage';
import MyPage from '@components/pages/mypage/template/MyPage';
import SettingPage from '@components/pages/setting/template/SettingPage';
import MoreFeedbackPage from '@components/pages/moreFeedback/template/MoreFeedbackPage';
import NotificationPage from '@components/pages/notification/template/NotificationPage';
import ProfileEditPage from '@components/pages/profileEdit/template/ProfileEditPage';
import OnBoardPage from '@components/pages/onBoard/template/OnBoardPage';
import PeerPage from '@components/pages/peer/template/PeerPage';
import ProjectPage from '@components/pages/project/template/ProjectPage';
import ReviewPage from '@components/pages/review/template/ReviewPage';
import ReviewPeerPage from '@components/pages/reviewPeer/template/ReviewPeerPage';
import ReviewResultPage from '@components/pages/reviewResult/template/ReviewResultPage';
import ReviewSelfPage from '@components/pages/reviewSelf/template/ReviewSelfPage';

export const Pages = {
  HomePage,
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
  RedirectPage,
};

export const PageRoutes: Record<keyof typeof Pages, string> = {
  HomePage: '/',
  PeerPage: '/peer',
  ProjectPage: '/project',
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
  RedirectPage: '/login/kakao',
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
