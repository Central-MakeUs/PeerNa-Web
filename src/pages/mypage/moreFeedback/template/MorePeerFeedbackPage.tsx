import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Talk from '@components/common/atom/Talk';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Header from '@components/wrapper/Header';
import useGetMorePeerFeedback from '@hooks/api/home/peerId/useGetMorePeerFeedback';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';

type MorePeerFeedbackPageParams = {
  memberId: string;
};

const MorePeerFeedbackPage: ActivityComponentType<
  MorePeerFeedbackPageParams
> = ({ params }) => {
  const memberId = params.memberId;

  const { data, fetchNextPage, isFetchingNextPage } = useGetMorePeerFeedback(
    parseInt(memberId),
  );

  const { pop } = useFlow();
  const handleBack = () => pop();

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleBack} />
          <Header.Title className="mx-auto">동료들의 한 줄 피드백</Header.Title>
          <Header.RightButton text="" handleClick={() => null} />
        </Header.TopBar>
      </Header>
      <Content>
        <ul className="w-full flex flex-col gap-5 px-[24px] py-[20px]">
          {data?.pages.map(item =>
            item.result.map(feedback => (
              <li>
                <Talk type="dimed">{feedback}</Talk>
              </li>
            )),
          )}
        </ul>
        <IntersectionBox ref={intersectionRef} />
        {isFetchingNextPage && <Spinner />}
      </Content>
    </AppScreenContainer>
  );
};

export default MorePeerFeedbackPage;
