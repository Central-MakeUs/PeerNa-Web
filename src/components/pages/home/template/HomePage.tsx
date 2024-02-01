import { ActivityComponentType } from '@stackflow/react';
import { useEffect, useState } from 'react';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import HomeHeader from '@components/pages/notification/molecule/HomeHeader';
import Layout from '@components/pages/mypage/organism/Layout';
import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import Typography from '@components/common/atom/Typography';
import ReviewButton from '../atom/ReviewButton';
import PeerTypeAvatarList from '../molecule/PeerTypeAvatarList';
import UserProfileList from '../molecule/UserProfileList';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import { Tab } from '@nextui-org/react';
import { useGetSearchPeerPart } from '@hooks/api/useGetSearchPeerPart';
import { PartType } from '@constants/member';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import useIntersection from '@hooks/useIntersection';
import Spinner from '@components/common/atom/Spinner';

const HomePage: ActivityComponentType = () => {
  const [currentTab, setCurrentTab] = useState('ALL');

  const { data, refetch, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetSearchPeerPart(currentTab);

  useEffect(() => {
    refetch();
  }, [currentTab]);

  const handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const intersectionRef = useIntersection(handleIntersection);

  return (
    <AppScreenContainer>
      <div className="w-full !bg-gradient-to-r from-[#f7f7f7] via-[#F6F7F8] to-[#FF8766] via-[#FF92FC] to-[#FFC729] via-[#FFD7CC]">
        <HomeHeader />
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
          <UserProfileList data={data} />
          <div ref={intersectionRef} style={{ height: '10px' }} />
          {isFetchingNextPage && <Spinner />}
        </Layout>
        <BottomNavigation />
      </div>
    </AppScreenContainer>
  );
};

export default HomePage;
