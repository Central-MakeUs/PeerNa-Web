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
  page: number,
): Promise<ApiResponse<AllFeedbackDTOPage>> => {
  const response = await http.get(`/member/mypage/feedback?page=${page}`);
  return response.data;
};

export const useGetMoreFeedback = () =>
  useInfiniteQuery({
    queryKey: ['getMoreFeedback'],
    queryFn: ({ pageParam = 1 }) => getMoreFeedback(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.result.isLast ? undefined : nextPage;
    },
  });
