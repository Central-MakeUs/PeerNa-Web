import { QUERY_KEY } from "@constants/queryKey";
import { useInfiniteQuery } from '@tanstack/react-query';
import { NotificationItemType } from '@type/index';
import { InfiniteApiResponse, http } from 'API';

interface ProjectNotificationResponseDTO extends NotificationItemType {}

const getProjectNotification = async (
  page: number,
): Promise<InfiniteApiResponse<ProjectNotificationResponseDTO>> => {
  const response = await http.get(`/home/notice/project?page=${page}`);
  return response.data;
};

export default function useGetProjectNotification() {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.PROJECT_NOTIFICATION],
    queryFn: ({ pageParam = 1 }) => getProjectNotification(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
