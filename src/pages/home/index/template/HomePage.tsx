import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import Modals from '@components/common/molecule/Modals';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { UtilityKeys } from '@constants/localStorage';
import useGetSearchPeerPart from '@hooks/api/home/search/useGetSearchPeerPart';
import useHistory from '@hooks/common/useHistory';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Spacer, Tab } from '@nextui-org/react';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import Layout from '@pages/mypage/index/organism/Layout';
import { ActivityComponentType } from '@stackflow/react';
import { PartType } from '@type/enums';
import { getAccessToken } from '@utils/token';
import { useEffect, useState } from 'react';
import ReviewButton from '../atom/ReviewButton';
import PeerTypeAvatarList from '../molecule/PeerTypeAvatarList';
import UserProfileList from '../molecule/UserProfileList';

const HomePage: ActivityComponentType = () => {
  const [currentTab, setCurrentTab] = useState('ALL');

  const { data, refetch, isFetchingNextPage, fetchNextPage } =
    useGetSearchPeerPart(currentTab);

  useEffect(() => {
    refetch();
  }, [currentTab]);

  const { push } = useFlow();
  const { openModal } = useModal('push');
  const { handleClearHistory } = useHistory();
  useEffect(() => {
    handleClearHistory();
    // 온보딩을 해본 유저인지 확인
    const hasToken = getAccessToken();
    const isOnboarding =
      !localStorage.getItem(UtilityKeys.IS_ONBOARD) && hasToken;
    const isPushAgree = !localStorage.getItem(UtilityKeys.IS_PUSH_AGREE);
    if (isOnboarding) {
      push('OnboardingPage', { step: '1' });
    }
    // 푸시 알림을 설정한 유저인지 확인(로그인 해야 나옴)
    if (isPushAgree && isOnboarding) {
      openModal();
    }
  }, []);

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <Content>
        <div className="w-full bg-peer-bg bg-no-repeat bg-cover flex flex-col">
          <Header>
            <Header.Body className="flex pl-5 pt-10 pr-3 pb-4 mb-[163px] relative">
              <Header.Title>PeerNa</Header.Title>
            </Header.Body>
          </Header>
          <Layout>
            <HeaderContainer size="md">
              <Typography variant="header03">
                원하는 유형의 동료를 찾아보세요
              </Typography>
            </HeaderContainer>
            <PeerTypeAvatarList />
            <ReviewButton />
            <UnderlineTabs
              selectedKey={currentTab}
              onSelectionChange={key => setCurrentTab(key as PartType)}
            >
              <Tab key="ALL" title="전체" />,
              <Tab key="PLANNER" title="기획자" />,
              <Tab key="DESIGNER" title="디자이너" />,
              <Tab key="FRONT_END" title="FE 개발자" />,
              <Tab key="BACK_END" title="BE 개발자" />,
            </UnderlineTabs>
            {data && (
              <UserProfileList
                data={data?.pages.flatMap(profile => profile.result)}
              />
            )}
            <IntersectionBox ref={intersectionRef} />
            {isFetchingNextPage && <Spinner />}
          </Layout>
        </div>
        <Spacer y={12} />
      </Content>
      <Footer bottom={0}>
        <BottomNavigation />
      </Footer>
      <Modals />
    </AppScreenContainer>
  );
};

export default HomePage;
