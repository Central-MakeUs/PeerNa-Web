import Spinner from '@components/common/atom/Spinner';
import Talk from '@components/common/atom/Talk';
import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { useGetMoreFeedback } from '@hooks/api/useGetMoreFeedback';
import { useFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';

const MoreFeedbackPage: ActivityComponentType = () => {
  const currentPage = 1;
  const {
    data: moreFeedback,
    isLoading,
    isError,
  } = useGetMoreFeedback(currentPage);

  const { pop } = useFlow();
  const handleClick = () => pop();

  //TODO) 무한스크롤 구현

  if (isLoading) {
    return (
      <AppScreenContainer>
        <TopHeader title="동료들의 한 줄 피드백" onClick={handleClick} />
        <Spinner />
      </AppScreenContainer>
    );
  }

  if (isError) {
    return (
      <AppScreenContainer>
        <TopHeader title="동료들의 한 줄 피드백" onClick={handleClick} />

        <div>에러 발생</div>
      </AppScreenContainer>
    );
  }

  const peerFeedbackList = moreFeedback?.feedbackList;

  return (
    <AppScreenContainer>
      <TopHeader title="동료들의 한 줄 피드백" onClick={handleClick} />

      {peerFeedbackList && (
        <ul className="w-full flex flex-col gap-3 px-[24px] py-[20px]">
          {peerFeedbackList.map((item: string, index: number) => (
            <li key={index}>
              <Talk type="dimed">{item}</Talk>
            </li>
          ))}
        </ul>
      )}
    </AppScreenContainer>
  );
};

export default MoreFeedbackPage;
