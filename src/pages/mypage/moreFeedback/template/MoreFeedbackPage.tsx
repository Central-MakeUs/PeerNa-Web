import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Talk from '@components/common/atom/Talk';
import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { useGetMoreFeedback } from '@hooks/api/member/mypage/useGetMoreFeedback';
import useIntersection from '@hooks/common/useIntersection';
import { useFlow } from '@hooks/common/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';

const MoreFeedbackPage: ActivityComponentType = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetMoreFeedback();

  const { pop } = useFlow();
  const handleClick = () => pop();

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <TopHeader title="동료들의 한 줄 피드백" onClick={handleClick} />

      <ul className="w-full flex flex-col gap-3 px-[24px] py-[20px]">
        {data?.pages.map(item =>
          item.result.feedbackList.map(feedback => (
            <li>
              <Talk type="dimed">{feedback}</Talk>
            </li>
          )),
        )}
      </ul>

      <IntersectionBox ref={intersectionRef} />

      {isFetchingNextPage && <Spinner />}
    </AppScreenContainer>
  );
};

export default MoreFeedbackPage;
