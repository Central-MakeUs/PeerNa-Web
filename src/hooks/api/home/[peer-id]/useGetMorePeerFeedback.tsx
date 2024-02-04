import { InfiniteApiResponse, http } from '@/API';
import { useInfiniteQuery } from '@tanstack/react-query';

const getMorePeerFeedback = async (
  peerId: number,
  page: number,
): Promise<InfiniteApiResponse<string>> => {
  const response = await http.get(`/home/${peerId}/peer-feedback?page=${page}`);
  return response.data;
};

export default function useGetMorePeerFeedback(peerId: number) {
  return useInfiniteQuery({
    queryKey: ['getMorePeerFeedback', peerId],
    queryFn: ({ pageParam = 1 }) =>
      getMorePeerFeedback(peerId, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
