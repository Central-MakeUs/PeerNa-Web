import { http, ApiResponse } from '@apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';

interface ProjectDetailDTOPage {
  projectList: ProjectListDTO[];
  totalElements: number;
  currentPageElements: number;
  totalPage: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface ProjectListDTO {
  projectId: number;
  projectName: string;
  introduce: string;
  startDate: string;
  endDate: string;
}

export const getMorePeerProject = async (
  peerId: string,
  page: number,
): Promise<ApiResponse<ProjectDetailDTOPage>> => {
  const response = await http.get(`/home/${peerId}/peer-project?page=${page}`);
  return response.data;
};

export const useGetMorePeerProject = (peerId: string) =>
  useInfiniteQuery<ApiResponse<ProjectDetailDTOPage>>({
    queryKey: ['getSearchPeerPart', peerId],
    queryFn: ({ pageParam = 1 }) =>
      getMorePeerProject(peerId, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage?.result?.isLast ? undefined : nextPage;
    },
  });
