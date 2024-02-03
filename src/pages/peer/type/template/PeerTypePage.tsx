import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { CardType } from '@constants/card';
import { useGetSearchPeerType } from '@hooks/api/useGetSearchPeerType';
import useIntersection from '@hooks/useIntersection';
import { useFlow } from '@hooks/useStackFlow';
import UserProfileList from '@pages/home/index/molecule/UserProfileList';
import { ActivityComponentType } from '@stackflow/react';
import PeerItem from '../atom/PeerItem';

type PeerTypePageParams = {
  type: CardType;
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
      {data && (
        <UserProfileList data={data.pages.flatMap(page => page.result)} />
      )}

      <IntersectionBox ref={intersectionRef} />
      {isFetchingNextPage && <Spinner />}
    </AppScreenContainer>
  );
};

export default PeerTypePage;
