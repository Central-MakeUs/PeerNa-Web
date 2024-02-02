import { http, ApiResponse } from '@apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PartType, JobType } from '@constants/member';

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
  name: 'string';
  job: JobType;
  part: PartType;
  peerTestType: 'D' | 'I' | 'S' | 'C';
  oneLiner: 'string';
  totalScore: number;
}

const getSearchPeerType = async (
  peerType: string,
  page: number,
): Promise<ApiResponse<MemberSimpleDTOPage>> => {
  const response = await http.get(
    `/home/search/peer-type?peerType=${peerType}&page=${page}`,
  );
  return response.data;
};

export const useGetSearchPeerType = (peerType: string) =>
  useInfiniteQuery<ApiResponse<MemberSimpleDTOPage>>({
    queryKey: ['getSearchPeerType', peerType],
    queryFn: ({ pageParam = 1 }) =>
      getSearchPeerType(peerType, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage?.result?.isLast ? undefined : nextPage;
    },
  });
