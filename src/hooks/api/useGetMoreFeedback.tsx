import { http, ApiResponse } from '@apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface AllFeedbackDTO {
  feedbackList: string[];
  totalElements: number;
  currentPageElements: number;
  totalPage: number;
  isFirst: boolean;
  isLast: boolean;
}

export const getMoreFeedback = async (
  pageParam: number,
): Promise<ApiResponse<AllFeedbackDTO>> => {
  const response = await http.get(`/member/mypage/feedback?page=${pageParam}`);
  return { ...response.data, pageParam };
};

export const useGetMoreFeedback = () =>
  useInfiniteQuery<ApiResponse<AllFeedbackDTO>, AxiosError>({
    queryKey: ['getMoreFeedback'],
    queryFn: ({ pageParam = 1 }) => getMoreFeedback(pageParam),
    getNextPageParam: lastPage => {
      const nextPage =
        lastPage?.result?.isLast === false ? lastPage.pageParam + 1 : undefined;
      return nextPage;
    },
    select: data =>
      data.pages?.flatMap(feedback => feedback?.result?.feedbackList),
  });
