import { useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse, http } from 'api';

export interface MemberSimpleDTOPage {
  memberSimpleProfileDtoList: MemberSimpleProfileDTO[];
  totalElements: number;
  currentPageElements: number;
  totalPage: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface MemberSimpleProfileDTO {
  memberId: number;
  name: string;
  job: string;
  part: string;
  peerTestType: 'D' | 'I' | 'S' | 'C';
  oneLiner: string;
  totalScore: number;
}

export const getSearchPeerPart = async (
  peerPart: string,
  page: number,
): Promise<ApiResponse<MemberSimpleDTOPage>> => {
  const response = await http.get(
    `/home/search/peer-part?part=${peerPart}&page=${page}`,
  );
  return response.data;
};

export const useGetSearchPeerPart = (peerPart: string) =>
  useInfiniteQuery<ApiResponse<MemberSimpleDTOPage>>({
    queryKey: ['getSearchPeerPart', peerPart],
    queryFn: ({ pageParam = 1 }) =>
      getSearchPeerPart(peerPart, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage?.result?.isLast ? undefined : nextPage;
    },
  });
