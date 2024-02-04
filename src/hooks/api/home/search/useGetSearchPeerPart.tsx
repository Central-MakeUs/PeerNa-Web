import { InfiniteApiResponse, http } from '@/API';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MemberDefaultInformationTypeWithUuid } from '@type/index';

interface SearchPeerPartResponseDTO
  extends MemberDefaultInformationTypeWithUuid {}

const getSearchPeerPart = async (
  peerPart: string,
  page: number,
): Promise<InfiniteApiResponse<SearchPeerPartResponseDTO>> => {
  const response = await http.get(
    `/home/search/peer-part?part=${peerPart}&page=${page}`,
  );
  return response.data;
};

export default function useGetSearchPeerPart(peerPart: string) {
  return useInfiniteQuery({
    queryKey: ['getSearchPeerPart', peerPart],
    queryFn: ({ pageParam = 1 }) =>
      getSearchPeerPart(peerPart, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
