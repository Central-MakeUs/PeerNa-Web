import HomePage from '@components/pages/home/template/HomePage';
import AppleRedirectPage from '@components/pages/login/template/AppleRedirectPage';
import KakaoRedirectPage from '@components/pages/login/template/KakaoRedirectPage';
import MyPage from '@components/pages/mypage/template/MyPage';
import NotificationPage from '@components/pages/notification/template/NotificationPage';
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
  OnBoardPage,
  ReviewPage,
  ReviewSelfPage,
  ReviewPeerPage,
  ReviewResultPage,
  KakaoRedirectPage,
  AppleRedirectPage,
};

export const PageRoutes: Record<keyof typeof Pages, string> = {
  HomePage: '/',
  PeerPage: '/peer',
  ProjectPage: '/project',
  NotificationPage: '/notification',
  MyPage: '/mypage',
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
