import { http, ApiResponse } from '@apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface MemberSimpleDTOPage {
  memberSimpleProfileDtoList: MemberSimpleProfileDTO[];
  totalElements: number;
  currentPageElements: number;
  totalPage: number;
  isFirst: boolean;
  isLast: boolean;
}

interface PageResponse<T> extends ApiResponse<T> {
  currentPage: number;
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
  pageParam: number,
): Promise<PageResponse<MemberSimpleDTOPage>> => {
  const response = await http.get(
    `/home/search/peer-part?part=${peerPart}&page=${pageParam}`,
  );
  return { ...response.data, pageParam };
};

export const useGetSearchPeerPart = (peerPart: string) =>
  useInfiniteQuery<PageResponse<MemberSimpleDTOPage>, AxiosError>({
    queryKey: ['getSearchPeerPart', peerPart],
    queryFn: ({ pageParam = 1 }) => getSearchPeerPart(peerPart, pageParam),
    getNextPageParam: lastPage => {
      const nextPage =
        lastPage?.result?.isLast === false ? lastPage.pageParam + 1 : undefined;
      return nextPage;
    },
    select: data =>
      (data?.pages ?? []).flatMap(
        part => part?.result?.memberSimpleProfileDtoList ?? [],
      ),
  });
