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
import IntersectionBox from '@components/common/atom/IntersectionBox';

const HomePage: ActivityComponentType = () => {
  const [currentTab, setCurrentTab] = useState('ALL');

  const { data, refetch, isFetchingNextPage, fetchNextPage } =
    useGetSearchPeerPart(currentTab);

  useEffect(() => {
    refetch();
  }, [currentTab]);

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <div className="w-full bg-peer-bg">
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
          <IntersectionBox ref={intersectionRef} />

          {isFetchingNextPage && <Spinner />}
        </Layout>
        <BottomNavigation />
      </div>
    </AppScreenContainer>
  );
};

export default HomePage;
