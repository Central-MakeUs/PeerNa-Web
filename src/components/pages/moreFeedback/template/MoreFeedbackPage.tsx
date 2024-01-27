import TopHeader from '@components/common/organism/TopHeader';
import { useMoreFeedback } from '@hooks/query/useMoreFeedback';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Talk from '@components/common/atom/Talk';
import Spinner from '@components/common/atom/Spinner';
import { useFlow } from '@hooks/useStackFlow';

export default function MoreFeedbackPage() {
  const currentPage = 1;
  const {
    data: moreFeedback,
    isLoading,
    isError,
  } = useMoreFeedback(currentPage);

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
}
