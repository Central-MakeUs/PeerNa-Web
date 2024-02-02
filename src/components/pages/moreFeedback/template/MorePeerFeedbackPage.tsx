import TopHeader from '@components/common/organism/TopHeader';
import { useGetMorePeerFeedback } from '@hooks/api/useGetMorePeerFeedback';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Talk from '@components/common/atom/Talk';
import Spinner from '@components/common/atom/Spinner';
import { useFlow } from '@hooks/useStackFlow';
import useIntersection from '@hooks/useIntersection';
import { ActivityComponentType } from '@stackflow/react';

type peerDetailPageParams = {
  memberId: string;
};

const MorePeerFeedbackPage: ActivityComponentType<peerDetailPageParams> = ({
  params,
}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetMorePeerFeedback(params.memberId);

  const { pop } = useFlow();
  const handleClick = () => pop();

  const handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const intersectionRef = useIntersection(handleIntersection);

  return (
    <AppScreenContainer>
      <TopHeader title="동료들의 한 줄 피드백" onClick={handleClick} />

      <ul className="w-full flex flex-col gap-3 px-[24px] py-[20px]">
        {data?.map(item => (
          <li>
            <Talk type="dimed">{item}</Talk>
          </li>
        ))}
      </ul>

      <div ref={intersectionRef} style={{ height: '10px' }} />

      {isFetchingNextPage && <Spinner />}
    </AppScreenContainer>
  );
};

export default MorePeerFeedbackPage;
