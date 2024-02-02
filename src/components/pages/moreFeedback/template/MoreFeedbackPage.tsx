import TopHeader from '@components/common/organism/TopHeader';
import { useGetMoreFeedback } from '@hooks/api/useGetMoreFeedback';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Talk from '@components/common/atom/Talk';
import Spinner from '@components/common/atom/Spinner';
import { useFlow } from '@hooks/useStackFlow';
import useIntersection from '@hooks/useIntersection';
import { ActivityComponentType } from '@stackflow/react';
import IntersectionBox from '@components/common/atom/IntersectionBox';

const MoreFeedbackPage: ActivityComponentType = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetMoreFeedback();

  console.log(data);

  const { pop } = useFlow();
  const handleClick = () => pop();

  const intersectionRef = useIntersection(fetchNextPage);

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

      <IntersectionBox ref={intersectionRef} />

      {isFetchingNextPage && <Spinner />}
    </AppScreenContainer>
  );
};

export default MoreFeedbackPage;
