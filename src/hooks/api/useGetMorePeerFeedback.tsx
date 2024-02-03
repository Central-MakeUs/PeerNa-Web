import { useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse, http } from 'api';

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
  page: number,
): Promise<ApiResponse<AllFeedbackDTO>> => {
  const response = await http.get(`/home/${peerId}/peer-feedback?page=${page}`);
  return response.data;
};

export const useGetMorePeerFeedback = (peerId: number) =>
  useInfiniteQuery<ApiResponse<AllFeedbackDTO>>({
    queryKey: ['getMorePeerFeedback', peerId],
    queryFn: ({ pageParam = 1 }) =>
      getMorePeerFeedback(peerId, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage?.result?.isLast ? undefined : nextPage;
    },
  });
