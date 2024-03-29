import { QUERY_KEY } from '@constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ProjectItemType } from '@type/index';
import { InfiniteApiResponse, http } from '@utils/API';

interface ProjectItemResponseDTO extends ProjectItemType {}

const getMyProjectList = async (
  page: number,
): Promise<InfiniteApiResponse<ProjectItemResponseDTO>> => {
  const response = await http.get(`/project/my?page=${page}`);
  return response.data;
};

export default function useGetMyProjectList() {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.MY_PROJECT],
    queryFn: ({ pageParam = 1 }) => getMyProjectList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
