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

export const getMorePeerFeedback = async (
  peerId: number,
  pageParam: number,
): Promise<ApiResponse<AllFeedbackDTO>> => {
  const response = await http.get(
    `/home/${peerId}/peer-feedback?page=${pageParam}`,
  );
  return { ...response.data, pageParam };
};

export const useGetMorePeerFeedback = (peerId: string) =>
  useInfiniteQuery<ApiResponse<AllFeedbackDTO>, AxiosError>({
    queryKey: ['getMorePeerFeedback', peerId],
    queryFn: ({ pageParam = 1 }) => getMorePeerFeedback(peerId, pageParam),
    getNextPageParam: lastPage => {
      const nextPage =
        lastPage?.result?.isLast === false ? lastPage.pageParam + 1 : undefined;
      return nextPage;
    },
    select: data =>
      data.pages?.flatMap(feedback => feedback?.result?.feedbackList),
  });
