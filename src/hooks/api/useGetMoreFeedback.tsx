import { http, ApiResponse } from '@apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';

interface AllFeedbackDTOPage {
  feedbackList: string[];
  totalElements: number;
  currentPageElements: number;
  totalPage: number;
  isFirst: boolean;
  isLast: boolean;
}

const getMoreFeedback = async (
  pageParam: number,
): Promise<ApiResponse<AllFeedbackDTOPage>> => {
  const response = await http.get(`/member/mypage/feedback?page=${pageParam}`);
  return { ...response.data, pageParam };
};

export const useGetMoreFeedback = () =>
  useInfiniteQuery({
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
