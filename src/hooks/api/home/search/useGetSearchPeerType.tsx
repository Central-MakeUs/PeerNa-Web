import { QUERY_KEY } from "@constants/queryKey";
import { useInfiniteQuery } from '@tanstack/react-query';
import { ProjectInformationWithCreatorType } from '@type/index';
import { InfiniteApiResponse, http } from 'API';

interface SearchPeerTypeResponseDTO extends ProjectInformationWithCreatorType {}

const getSearchPeerType = async (
  peerType: string,
  page: number,
): Promise<InfiniteApiResponse<SearchPeerTypeResponseDTO>> => {
  const response = await http.get(
    `/home/search/peer-type?peerType=${peerType}&page=${page}`,
  );
  return response.data;
};

export default function useGetSearchPeerType(peerType: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.SEARCH_PEER_TYPE, peerType],
    queryFn: ({ pageParam = 1 }) =>
      getSearchPeerType(peerType, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
