import { useInfiniteQuery } from '@tanstack/react-query';
import { NotificationItemType } from '@type/index';
import { InfiniteApiResponse, http } from '@utils/API';

interface ProjectNotificationResponseDTO extends NotificationItemType {}

const getProjectNotification = async (
  page: number,
): Promise<InfiniteApiResponse<ProjectNotificationResponseDTO>> => {
  const response = await http.get(`/home/notice/project?page=${page}`);
  return response.data;
};

export default function useGetProjectNotification() {
  return useInfiniteQuery({
    queryKey: ['getProjectNotification'],
    queryFn: ({ pageParam = 1 }) => getProjectNotification(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
