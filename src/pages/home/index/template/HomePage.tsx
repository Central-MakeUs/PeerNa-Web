import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetSearchPeerPart from '@hooks/api/home/search/useGetSearchPeerPart';
import useIntersection from '@hooks/common/useIntersection';
import { Tab } from '@nextui-org/react';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import Layout from '@pages/mypage/index/organism/Layout';
import { ActivityComponentType } from '@stackflow/react';
import { PartType } from '@type/enums';
import { useEffect, useState } from 'react';
import ReviewButton from '../atom/ReviewButton';
import PeerTypeAvatarList from '../molecule/PeerTypeAvatarList';
import UserProfileList from '../molecule/UserProfileList';

const HomePage: ActivityComponentType = () => {
  const [currentTab, setCurrentTab] = useState('ALL');

  const { data, refetch, isFetchingNextPage, fetchNextPage } =
    useGetSearchPeerPart(currentTab);

  console.log(data);

  useEffect(() => {
    refetch();
  }, [currentTab]);

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <div className="w-full bg-peer-bg bg-no-repeat bg-cover flex flex-col">
        <Header>
          <Header.Body className="flex pl-5 pt-10 pr-3 pb-4 mb-[163px] relative">
            <Header.Title>PeerNa</Header.Title>
          </Header.Body>
        </Header>
        <Content>
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
            <ErrorBoundaryWithSuspense>
              <UserProfileList
                data={data?.pages.flatMap(profile => profile.result)}
              />
            </ErrorBoundaryWithSuspense>
            <IntersectionBox ref={intersectionRef} />
            {isFetchingNextPage && <Spinner />}
          </Layout>
        </Content>
        <Footer bottom={0}>
          <BottomNavigation />
        </Footer>
      </div>
    </AppScreenContainer>
  );
};

export default HomePage;
