import { http } from '@apis/index';
import { useSuspenseQuery } from '@tanstack/react-query';

export type ApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
};

interface GetMoreFeedbackResponseDTO {
  feedbackList: string[];
  totalElements: number;
  currentPageElements: number;
  totalPage: number;
  isFirst: boolean;
  isLast: boolean;
}

export const getMoreFeedback = async (
  page: number,
): Promise<ApiResponse<GetMoreFeedbackResponseDTO>> => {
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
