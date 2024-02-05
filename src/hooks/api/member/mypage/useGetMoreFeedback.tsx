import { QUERY_KEY } from "@constants/queryKey";
import { useInfiniteQuery } from '@tanstack/react-query';
import { InfiniteApiResponse, http } from '@utils/API';

const getMoreFeedback = async (
  page: number,
): Promise<InfiniteApiResponse<string>> => {
  const response = await http.get(`/member/mypage/feedback?page=${page}`);
  return response.data;
};

export default function useGetMoreFeedback() {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.MY_PROJECT],
    queryFn: ({ pageParam = 1 }) => getMoreFeedback(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
