import { http, ApiResponse } from '@apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PartType, JobType } from '@constants/member';
import { AxiosError } from 'axios';

export interface MemberSimpleDTOPage {
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
  name: 'string';
  job: JobType;
  part: PartType;
  peerTestType: 'D' | 'I' | 'S' | 'C';
  oneLiner: 'string';
  totalScore: number;
}

export const getSearchPeerType = async (
  peerType: string,
  pageParam: number,
): Promise<PageResponse<MemberSimpleDTOPage>> => {
  const response = await http.get(
    `/home/search/peer-type?peerType=${peerType}&page=${pageParam}`,
  );
  return { ...response.data, pageParam };
};

export const useGetSearchPeerType = (peerType: string) =>
  useInfiniteQuery<PageResponse<MemberSimpleDTOPage>, AxiosError>({
    queryKey: ['getSearchPeerType', peerType],
    queryFn: ({ pageParam = 1 }) => getSearchPeerType(peerType, pageParam),
    getNextPageParam: lastPage => {
      const nextPage =
        lastPage?.result?.isLast === false ? lastPage.pageParam + 1 : undefined;
      return nextPage;
    },
    select: data =>
      data?.pages.flatMap(
        profile => profile?.result?.memberSimpleProfileDtoList ?? [],
      ),
  });
