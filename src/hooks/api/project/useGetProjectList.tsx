import { http } from '@apis/index';
import { useSuspenseQuery } from '@tanstack/react-query';

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
  result: {
    projectList: ProjectItemType[];
    totalElements: number;
    currentPageElements: number;
    totalPage: number;
    isFirst: boolean;
    isLast: boolean;
  };
}

export const geProjectList = async (
  page: number,
): Promise<ProjectResponseDTO> => {
  const response = await http.get(`/project?page=${page}`);
  return response.data;
};

export const useGetProjectList = (page: number) => {
  return useSuspenseQuery({
    queryKey: ['geProjectList', page],
    queryFn: () => geProjectList(page),
    select: data => data.result,
  });
};
