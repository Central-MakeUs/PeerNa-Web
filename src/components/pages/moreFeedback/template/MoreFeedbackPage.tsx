import Header from '@components/common/organism/Header';
import { useMoreFeedback } from '@hooks/query/useMoreFeedback';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Talk from '@components/common/atom/Talk';
import Spinner from '@components/common/atom/Spinner';

export default function MoreFeedbackPage() {
  const currentPage = 1;
  const {
    data: moreFeedback,
    isLoading,
    isError,
  } = useMoreFeedback(currentPage);
  //TODO) 무한스크롤 구현

  if (isLoading) {
    return (
      <AppScreenContainer>
        <Header
          showBackButton={true}
          showSearchButton={false}
          showAddButton={false}
          centerAlign={true}
          title="동료들의 한 줄 피드백"
        />
        <Spinner />
      </AppScreenContainer>
    );
  }

  if (isError) {
    return (
      <AppScreenContainer>
        <Header
          showBackButton={true}
          showSearchButton={false}
          showAddButton={false}
          centerAlign={true}
          title="동료들의 한 줄 피드백"
          mainText={''}
        />
        <div>에러 발생</div>
      </AppScreenContainer>
    );
  }

  const peerFeedbackList = moreFeedback?.feedbackList;

  return (
    <AppScreenContainer>
      <Header
        showBackButton={true}
        showSearchButton={false}
        showAddButton={false}
        centerAlign={true}
        title="동료들의 한 줄 피드백"
      />
      {peerFeedbackList && (
        <ul className="flex flex-col gap-3 mb-6">
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
