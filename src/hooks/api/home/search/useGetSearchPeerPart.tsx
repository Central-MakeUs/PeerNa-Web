import { UtilityKeys } from '@constants/localStorage';
import { QUERY_KEY } from '@constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PeerSimpleProfileType } from '@type/index';
import { InfiniteApiResponse, http } from '@utils/API';

const getSearchPeerPart = async (
  peerPart: string,
  page: number,
): Promise<InfiniteApiResponse<PeerSimpleProfileType>> => {
  const isOnboarding = localStorage.getItem(UtilityKeys.IS_ONBOARD);
  if (!isOnboarding) {
    return {
      code: 0,
      message: '',
      result: [],
      pageRequestDto: {
        totalElements: 0,
        currentPageElements: 0,
        totalPage: 0,
        isFirst: true,
        isLast: true,
      },
    };
  }
  const response = await http.get(
    `/home/search/peer-part?part=${peerPart}&page=${page}`,
  );
  return response.data;
};

export default function useGetSearchPeerPart(peerPart: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.SEARCH_PEER_PART, peerPart],
    queryFn: ({ pageParam = 1 }) =>
      getSearchPeerPart(peerPart, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
