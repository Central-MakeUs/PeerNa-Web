import { useInfiniteQuery } from '@tanstack/react-query';
import { NotificationItemType } from '@type/index';
import { InfiniteApiResponse, http } from 'API';

interface PeerReviewNotificationResponseDTO extends NotificationItemType {}

const getPeerReviewNotification = async (
  page: number,
): Promise<InfiniteApiResponse<PeerReviewNotificationResponseDTO>> => {
  const response = await http.get(`/home/notice/peer-test?page=${page}`);
  return response.data;
};

export default function useGetPeerReviewNotification() {
  return useInfiniteQuery({
    queryKey: ['getPeerReviewNotification'],
    queryFn: ({ pageParam = 1 }) => getPeerReviewNotification(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
