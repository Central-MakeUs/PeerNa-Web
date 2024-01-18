import Home from '@components/home/template/Home';
import Redirect from '@components/login/template/Redirect';
import Mypage from '@components/mypage/template/Mypage';
import Notification from '@components/notification/template/Notification';
import Peer from '@components/peer/template/Peer';
import Project from '@components/project/template/Project';

export const Activities = {
  Home,
  Redirect,
  Peer,
  Project,
  Notification,
  Mypage,
};

export type ActivitiesTypes = keyof typeof Activities;
