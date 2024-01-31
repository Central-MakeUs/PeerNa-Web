import IconButton from '@components/common/atom/IconButton';
import UserProfileList from '@components/pages/home/molecule/UserProfileList';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { ActivityComponentType } from '@stackflow/react';
import PeerItem from '../atom/PeerItem';
import { getRgbaColorWithOpacity } from '@utils/styles';
import { useFlow } from '@hooks/useStackFlow';
import { CardType } from '@constants/card';
import { useGetSearchPeerType } from '@hooks/api/useGetSearchPeerType';
import useIntersection from '@hooks/useIntersection';
import Spinner from '@components/common/atom/Spinner';

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
  }[peerType];

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetSearchPeerType(peerType);

  const handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const intersectionRef = useIntersection(handleIntersection);

  return (
    <AppScreenContainer>
      <header
        className={`${bgColor} w-full flex items-start pt-[69px] pb-[24px]`}
      >
        <IconButton
          iconProps={{
            id: 'ArrowLeft',
            color: 'gray07',
            width: 10.5,
            height: 20,
          }}
          onClick={handleBack}
          className="ml-[20px]"
        />
        <PeerItem type={peerType} />
      </header>

      <UserProfileList data={data} />

      <div ref={intersectionRef} style={{ height: '10px' }} />
      {isFetchingNextPage && <Spinner />}
    </AppScreenContainer>
  );
};

export default PeerTypePage;
