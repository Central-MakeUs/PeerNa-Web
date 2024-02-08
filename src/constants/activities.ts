import RedirectPage from '@pages/auth/redirect/template/RedirectPage';
import DeveloperPage from '@pages/developer/DeveloperPage';
import HomePage from '@pages/home/index/template/HomePage';
import MyPage from '@pages/mypage/index/template/MyPage';
import MoreFeedbackPage from '@pages/mypage/moreFeedback/template/MoreFeedbackPage';
import MorePeerFeedbackPage from '@pages/mypage/moreFeedback/template/MorePeerFeedbackPage';
import MorePeerProjectPage from '@pages/mypage/moreProject/template/MorePeerProjectPage';
import PeerProjectDetailPage from '@pages/mypage/moreProject/template/PeerProjectDetailPage';
import ProfileEditPage from '@pages/mypage/profileEdit/template/ProfileEditPage';
import SettingPage from '@pages/mypage/setting/template/SettingPage';
import NotificationPage from '@pages/notification/index/template/NotificationPage';
import PeerDetailPage from '@pages/peer/detail/template/PeerDetailPage';
import PeerPage from '@pages/peer/index/template/PeerPage';
import OnboardingPage from '@pages/peer/onboard/template/OnboardingPage';
import MyProjectListPage from '@pages/peer/project/template/MyProjectListPage';
import PeerTypePage from '@pages/peer/type/template/PeerTypePage';
import ProjectCreatePage from '@pages/project/create/template/ProjectCreatePage';
import ProjectPage from '@pages/project/index/template/ProjectPage';
import ProjectDetailPage from '@pages/project/projectId/template/ProjectDetailPage';
import ProjectProposePage from '@pages/project/propose/template/ProjectProposePage';
import ReviewPage from '@pages/review/index/template/ReviewPage';
import ReviewPeerPage from '@pages/review/peer/template/ReviewPeerPage';
import ReviewResultPage from '@pages/review/result/template/ReviewResultPage';
import ReviewSelfPage from '@pages/review/self/template/ReviewSelfPage';

export const Pages = {
  HomePage,
  PeerTypePage,
  PeerDetailPage,
  MorePeerProjectPage,
  MorePeerFeedbackPage,
  PeerPage,
  ProjectPage,
  NotificationPage,
  MyPage,
  SettingPage,
  MoreFeedbackPage,
  PeerProjectDetailPage,
  MyProjectListPage,
  ProfileEditPage,
  OnboardingPage,
  ReviewPage,
  ReviewSelfPage,
  ReviewPeerPage,
  ReviewResultPage,
  RedirectPage,
  ProjectCreatePage,
  ProjectDetailPage,
  ProjectProposePage,
  DeveloperPage: DeveloperPage,
};

export type ActivityTypes = keyof typeof Pages;

export const PageRoutes: Record<keyof typeof Pages, string> = {
  HomePage: '/',
  PeerPage: '/peer',
  PeerTypePage: '/peer/type/:type',
  PeerDetailPage: '/peer/:memberId',
  MorePeerProjectPage: '/peer/:memberId/project',
  PeerProjectDetailPage: '/peer/:memberId/project/:projectId',
  MyProjectListPage: '/peer/:memberId/myProject',
  MorePeerFeedbackPage: '/peer/:memberId/feedback',
  ProjectPage: '/project',
  ProjectDetailPage: '/project/:id',
  ProjectCreatePage: '/project/create',
  ProjectProposePage: '/project/:id/propose',
  NotificationPage: '/notification',
  MyPage: '/mypage',
  SettingPage: '/mypage/setting',
  MoreFeedbackPage: '/mypage/feedback',
  ProfileEditPage: '/mypage/profile/edit',
  ReviewPage: '/review',
  OnboardingPage: '/review/onboarding',
  ReviewSelfPage: '/review/self',
  ReviewPeerPage: '/review/peer',
  ReviewResultPage: '/review/result',
  RedirectPage: '/auth/redirect',
  DeveloperPage: '/developer',
};

export const TabItem = {
  HomePage,
  ProjectPage,
  NotificationPage,
  MyPage,
};

export type PageTypes = keyof typeof Pages;
export type TabItemTypes = keyof typeof TabItem;
