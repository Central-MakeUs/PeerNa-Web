import HomePage from '@components/pages/home/template/HomePage';
import MyPage from '@components/pages/mypage/template/MyPage';
import NotificationPage from '@components/pages/notification/template/NotificationPage';
import OnBoard from '@components/pages/onboard/template/OnBoard';
import PeerPage from '@components/pages/peer/template/PeerPage';
import ProjectPage from '@components/pages/project/template/ProjectPage';

export const Activities = {
  HomePage,
  PeerPage,
  ProjectPage,
  NotificationPage,
  MyPage,
  OnBoard,
};

export type ActivitiesTypes = keyof typeof Activities;
