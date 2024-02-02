import { http } from '@apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';

type ProjectItemType = {
  projectId: number;
  projectName: string;
  introduce: string;
  startDate: string;
  endDate: string;
};

interface ProjectResponseDTO {
  code: number;
  message: string;
  result: ProjectItemType[];
  pageRequestDto: {
    totalElements: number;
    currentPageElements: number;
    totalPage: number;
    isFirst: boolean;
    isLast: boolean;
  };
}
export const getProjectList = async (
  page: number,
): Promise<ProjectResponseDTO> => {
  const response = await http.get(`/project?page=${page}`);
  return response.data;
};

export const useGetProjectList = () => {
  return useInfiniteQuery({
    queryKey: ['getProjectList'],
    queryFn: ({ pageParam = 1 }) => getProjectList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
};
