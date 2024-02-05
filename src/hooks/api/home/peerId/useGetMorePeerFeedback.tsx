import { QUERY_KEY } from "@constants/queryKey";
import { useInfiniteQuery } from '@tanstack/react-query';
import { InfiniteApiResponse, http } from '@utils/API';

const getMorePeerFeedback = async (
  peerId: number,
  page: number,
): Promise<InfiniteApiResponse<string>> => {
  const response = await http.get(`/home/${peerId}/peer-feedback?page=${page}`);
  return response.data;
};

export default function useGetMorePeerFeedback(peerId: number) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.MORE_PEER_FEEDBACK, peerId],
    queryFn: ({ pageParam = 1 }) =>
      getMorePeerFeedback(peerId, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
