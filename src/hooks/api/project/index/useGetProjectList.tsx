import { QUERY_KEY } from '@constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ProjectItemType } from '@type/index';
import { InfiniteApiResponse, http } from '@utils/API';

interface ProjectListResponseDTO extends ProjectItemType {}

const getProjectList = async (
  page: number,
): Promise<InfiniteApiResponse<ProjectListResponseDTO>> => {
  const response = await http.get(`/project?page=${page}`);
  return response.data;
};

export default function useGetProjectList() {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.PROJECT_LIST],
    queryFn: ({ pageParam = 1 }) => getProjectList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
