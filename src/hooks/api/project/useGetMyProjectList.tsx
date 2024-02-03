import { useInfiniteQuery } from '@tanstack/react-query';
import { http } from 'api';

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
export const getMyProjectList = async (
  page: number,
): Promise<ProjectResponseDTO> => {
  const response = await http.get(`/project/my?page=${page}`);
  return response.data;
};

export const useGetMyProjectList = () => {
  return useInfiniteQuery({
    queryKey: ['getMyProejctList'],
    queryFn: ({ pageParam = 1 }) => getMyProjectList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
};
