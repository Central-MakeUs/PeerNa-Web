import { InfiniteApiResponse, http } from '@/API';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ProjectItemType } from '@type/index';

interface ProjectListResponseDTO extends ProjectItemType {}

const getProjectList = async (
  page: number,
): Promise<InfiniteApiResponse<ProjectListResponseDTO>> => {
  const response = await http.get(`/project?page=${page}`);
  return response.data;
};

export default function useGetProjectList() {
  return useInfiniteQuery({
    queryKey: ['getProjectList'],
    queryFn: ({ pageParam = 1 }) => getProjectList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
