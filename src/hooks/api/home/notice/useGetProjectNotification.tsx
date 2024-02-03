import { http } from '@apis/index';
import { NoticeType } from '@constants/noticeType';
import { useInfiniteQuery } from '@tanstack/react-query';

type ProjectNotifiacitonType = {
  targetId: number;
  noticeType: NoticeType;
  contents: string;
  createdTime: string;
};

interface ProjectResponseDTO {
  code: number;
  message: string;
  result: ProjectNotifiacitonType[];
  pageRequestDto: {
    totalElements: number;
    currentPageElements: number;
    totalPage: number;
    isFirst: boolean;
    isLast: boolean;
  };
}

export const getProjectNotification = async (
  page: number,
): Promise<ProjectResponseDTO> => {
  const response = await http.get(`/home/notice/project?page=${page}`);
  return response.data;
};

export const useGetProjectNotification = () => {
  return useInfiniteQuery({
    queryKey: ['getProjectNotification'],
    queryFn: ({ pageParam = 1 }) => getProjectNotification(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
};
