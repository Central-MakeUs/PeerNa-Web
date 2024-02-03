import { http } from '@apis/index';
import { NoticeType } from '@constants/noticeType';
import { useInfiniteQuery } from '@tanstack/react-query';

type PeerReviewNotificationType = {
  targetId: number;
  noticeType: NoticeType;
  contents: string;
  createdTime: string;
};

interface ProjectResponseDTO {
  code: number;
  message: string;
  result: PeerReviewNotificationType[];
  pageRequestDto: {
    totalElements: number;
    currentPageElements: number;
    totalPage: number;
    isFirst: boolean;
    isLast: boolean;
  };
}

export const getPeerReviewNotification = async (
  page: number,
): Promise<ProjectResponseDTO> => {
  const response = await http.get(`/home/notice/peer-test?page=${page}`);
  return response.data;
};

export const useGetPeerReviewNotification = () => {
  return useInfiniteQuery({
    queryKey: ['getPeerReviewNotification'],
    queryFn: ({ pageParam = 1 }) => getPeerReviewNotification(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
};
