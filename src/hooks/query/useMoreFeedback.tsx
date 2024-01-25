import { AxiosResponse } from 'axios';
import { getFeedback } from '@apis/mypage';
import { useQuery } from '@tanstack/react-query';

interface MoreFeedbackResponse {
  code: number;
  message: string;
  result: MoreFeedback;
}

interface MoreFeedback {
  feedbackList: string[];
}

export const useMoreFeedback = (page: number) => {
  const { data, error, isLoading, isError } = useQuery<MoreFeedback, Error>({
    queryKey: ['moreFeedback', page],
    queryFn: async () => {
      const response: AxiosResponse<MoreFeedbackResponse> =
        await getFeedback(page);

      if (!response.data) {
        throw new Error('오류발생!');
      }

      const responseData: MoreFeedback = response.data.result;
      return responseData;
    },
    staleTime: 60 * 60 * 1000,
  });

  return { data, error, isLoading, isError };
};
