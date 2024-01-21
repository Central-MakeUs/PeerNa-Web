/* eslint-disable @typescript-eslint/no-explicit-any */
import HomePage from '@components/pages/home/template/HomePage';
import RedirectPage from '@components/pages/login/template/Redirect';
import MyPage from '@components/pages/mypage/template/MyPage';
import NotificationPage from '@components/pages/notification/template/NotificationPage';
import OnBoardPage from '@components/pages/onBoard/template/OnBoardPage';
import PeerPage from '@components/pages/peer/template/PeerPage';
import PeerReviewPage from '@components/pages/peerReview/template/PeerReviewPage';
import ProjectPage from '@components/pages/project/template/ProjectPage';
import ReviewPage from '@components/pages/review/template/ReviewPage';
import SelfTestPage from '@components/pages/selfTest/template/SelfTestPage';
import TestResultPage from '@components/pages/testResult/template/TestResultPage';
import { ActivityComponentType } from '@stackflow/react';

type DefaultParams = { [key: string]: string | undefined };

type PageRoute<
  T extends { [K in keyof T]: string | undefined } = DefaultParams,
> = {
  url: string;
  component: ActivityComponentType<T>;
};

export const PageRoutes: Record<string, PageRoute<any>> = {
  HomePage: { url: '/', component: HomePage },
  PeerPage: { url: '/peer', component: PeerPage },
  ProjectPage: { url: '/project', component: ProjectPage },
  NotificationPage: { url: '/notification', component: NotificationPage },
  MyPage: { url: '/mypage', component: MyPage },
  OnBoardPage: { url: '/onBoard', component: OnBoardPage },
  ReviewPage: { url: '/review', component: ReviewPage },
  SelfTestPage: { url: '/review/self', component: SelfTestPage },
  PeerReviewPage: { url: '/review/peer', component: PeerReviewPage },
  TestResultPage: { url: '/review/result', component: TestResultPage },
  RedirectPage: { url: '/login/kakao', component: RedirectPage },
};

export const Activities: Record<
  string,
  ActivityComponentType<any>
> = Object.entries(PageRoutes).reduce(
  (acc, [key, route]) => {
    acc[key] = route.component;
    return acc;
  },
  {} as Record<string, ActivityComponentType<any>>,
);

function createPageUrlMapping(
  routes: Record<string, PageRoute<any>>,
): Record<string, string> {
  const urlMapping: Record<string, string> = {};

  Object.keys(routes).forEach(pageName => {
    const route = routes[pageName];
    urlMapping[pageName] = route.url;
  });

  return urlMapping;
}

export const pageUrlMapping = createPageUrlMapping(PageRoutes);

export const TabItem = {
  HomePage,
  PeerPage,
  ProjectPage,
  NotificationPage,
  MyPage,
};

export type ActivitiesTypes = keyof typeof Activities;
export type TabItemTypes = keyof typeof TabItem;
