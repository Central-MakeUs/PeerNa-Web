import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { HOME_BG } from '@constants/images';
import { PART_LIST } from '@constants/list';
import { UtilityKeys } from '@constants/localStorage';
import useGetSearchPeerPart from '@hooks/api/home/search/useGetSearchPeerPart';
import useGetMe from '@hooks/api/member/index/useGetMe';
import useHistory from '@hooks/common/useHistory';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import useReviewState from '@hooks/store/useReviewState';
import { Spacer, Tab } from '@nextui-org/react';
import EmptyData from '@pages/home/index/atom/EmptyData';
import HomeBackground from '@pages/home/index/organism/HomeBackground';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import SelfTestModal from '@pages/mypage/index/molecule/SelfTestModal';
import Layout from '@pages/mypage/index/organism/Layout';
import { ActivityComponentType } from '@stackflow/react';
import { PartType } from '@type/enums';
import { getIsApp } from '@utils';
import { getAccessToken } from '@utils/token';
import { useEffect, useState } from 'react';
import ReviewButton from '../atom/ReviewButton';
import PeerTypeAvatarList from '../molecule/PeerTypeAvatarList';
import UserProfileList from '../molecule/UserProfileList';

const HomePage: ActivityComponentType = () => {
  const { push } = useFlow();

  const { openModal: openModalLogin } = useModal('login');
  const { openModal: openModalPush } = useModal('push');
  const { handleClearHistory } = useHistory();
  const { handleClearReviews } = useReviewState();
  const hasToken = getAccessToken();

  const { data: me } = useGetMe();
  const history = useHistory();
  const { openModal } = useModal('selfTest');
  useEffect(() => {
    handleClearHistory();
    handleClearReviews();
    // 온보딩을 해본 유저인지 확인
    const isOnboarding = localStorage.getItem(UtilityKeys.IS_ONBOARD);
    const rawIsPushAgree = localStorage.getItem(UtilityKeys.IS_PUSH_AGREE);
    const isPushAgree = rawIsPushAgree === 'true';

    if (!isOnboarding && !hasToken) {
      push('OnboardingPage', { step: '1' });
      return;
    }

    // 온보딩을 했고, 로그인이 되어 있는 상태에서 푸시 알림 허용을 안했으면
    if (isOnboarding && hasToken && !isPushAgree && getIsApp()) {
      openModalPush();
      return;
    }
    // 온보딩을 했고, 로그인이 되어있지 않는다면
    if (isOnboarding && !hasToken) {
      openModalLogin();
      return;
    }

    //로그인은 됐는데, 온보딩을 하지 않았을 경우
    if (!isOnboarding && !me?.name) {
      history.handleChangeHistory('HomePage', {});
      openModal();
    }
    // 로그인도 하고, 온보딩도 한 경우
    else localStorage.setItem(UtilityKeys.IS_ONBOARD, 'true');
  }, []);

  const [currentTab, setCurrentTab] = useState('ALL');

  const { data, refetch, isFetchingNextPage, fetchNextPage, isLoading } =
    useGetSearchPeerPart(currentTab);

  useEffect(() => {
    refetch();
  }, [currentTab]);

  const intersectionRef = useIntersection(fetchNextPage);

  const HOME_PART_LIST = [{ key: 'ALL', text: '전체' }, ...PART_LIST];

  return (
    <AppScreenContainer>
      <Content>
        <HomeBackground>
          <Header className="!px-0">
            <Header.Body className="relative h-[200px]">
              <img
                src={HOME_BG}
                alt="홈 배경 이미지"
                className="absolute -bottom-11 w-full"
              />
              <SvgIcon
                id="PeerNaLogo"
                color="gray08"
                width={80}
                height={18}
                className="absolute top-16 left-7"
              />
            </Header.Body>
          </Header>
          <Layout>
            <HeaderContainer size="sm">
              <Typography variant="header03">
                원하는 유형의 동료를 찾아보세요
              </Typography>
            </HeaderContainer>
            <PeerTypeAvatarList />
            <ErrorBoundaryWithSuspense>
              <ReviewButton />
            </ErrorBoundaryWithSuspense>
            <UnderlineTabs
              selectedKey={currentTab}
              onSelectionChange={key => setCurrentTab(key as PartType)}
            >
              {HOME_PART_LIST.map(part => (
                <Tab key={part.key} title={part.text} />
              ))}
            </UnderlineTabs>
            <ErrorBoundaryWithSuspense>
              {isFetchingNextPage && <Spinner />}
              {data?.pages.every(profile => profile.result.length === 0) ? (
                <EmptyData />
              ) : (
                <UserProfileList
                  data={data?.pages.flatMap(profile =>
                    profile.result.filter(
                      profile => !profile.job.includes('WITHDRAWAL'),
                    ),
                  )}
                  isLoading={isLoading}
                />
              )}
              <IntersectionBox ref={intersectionRef} />
            </ErrorBoundaryWithSuspense>
            <Spacer y={12} />
          </Layout>
        </HomeBackground>
      </Content>
      <Footer>
        <BottomNavigation />
      </Footer>
      <SelfTestModal />
    </AppScreenContainer>
  );
};

export default HomePage;
