import { http, ApiResponse } from '@apis/index';
import { useSuspenseQuery } from '@tanstack/react-query';

interface AllFeedbackDTO {
  feedbackList: string[];
  totalElements: number;
  currentPageElements: number;
  totalPage: number;
  isFirst: boolean;
  isLast: boolean;
}

export const getMoreFeedback = async (
  page: number,
): Promise<ApiResponse<AllFeedbackDTO>> => {
  const response = await http.get(`/member/mypage/feedback?page=${page}`);
  return response.data;
};

export const useGetMoreFeedback = (page: number) => {
  return useSuspenseQuery({
    queryKey: ['getMoreFeedback', page],
    queryFn: () => getMoreFeedback(page),
    select: data => data.result,
  });
};
