import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import useGetSearchPeerType from '@hooks/api/home/search/useGetSearchPeerType';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import UserProfileList from '@pages/home/index/molecule/UserProfileList';
import PeerItem from '@pages/peer/type/atom/PeerItem';
import { ActivityComponentType } from '@stackflow/react';
import { TestType } from '@type/enums';

type PeerTypePageParams = {
  type: Exclude<TestType, TestType.UNKNOWN>;
};

const PeerTypePage: ActivityComponentType<PeerTypePageParams> = ({
  params,
}) => {
  const peerType = params.type;

  const { pop } = useFlow();

  const handleBack = () => pop();

  const bgColor = {
    D: 'bg-primary200',
    I: 'bg-primary100',
    S: 'bg-primary200',
    C: 'bg-secondary-purple bg-opacity-20',
  };

  const { data, isFetchingNextPage, fetchNextPage } =
    useGetSearchPeerType(peerType);

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <header
        className={`${bgColor[peerType]} w-full flex flex-col items-start pt-[69px] pb-6`}
      >
        <TopHeader onClick={handleBack} />
        <PeerItem type={peerType} />
      </header>
      <ErrorBoundaryWithSuspense>
        <UserProfileList
          data={data?.pages.flatMap(profile => profile.result)}
        />
      </ErrorBoundaryWithSuspense>
      <IntersectionBox ref={intersectionRef} />
      {isFetchingNextPage && <Spinner />}
    </AppScreenContainer>
  );
};

export default PeerTypePage;
