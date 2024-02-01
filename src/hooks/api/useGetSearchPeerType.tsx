import { ApiResponse, http } from '@apis/index';
import { useSuspenseQuery } from '@tanstack/react-query';

interface MemberSimpleDTOPage {
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
  job: 'string';
  part: 'string';
  peerTestType: 'D' | 'I' | 'S' | 'C';
  oneLiner: 'string';
  totalScore: number;
}

export const getSearchPeerType = async (
  peerType: string,
  page: number,
): Promise<ApiResponse<MemberSimpleDTOPage>> => {
  const response = await http.get(
    `/home/search/peer-type?peerType=${peerType}&page=${page}`,
  );
  return response.data;
};

export const useGetSearchPeerType = (peerType: string, page: number) => {
  return useSuspenseQuery({
    queryKey: ['getSearchPeerType', peerType, page],
    queryFn: () => getSearchPeerType(peerType, page),
    select: data => data.result,
  });
};
