import { http, ApiResponse } from '@apis/index';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface MemberSimpleProfileDTO {
  memberId: number;
  name: 'string';
  job: 'string';
  part: 'string';
  peerTestType: 'D' | 'I' | 'S' | 'C';
  oneLiner: 'string';
  totalScore: number;
}

interface GetSearchPeerTypeResponseDTO {
  memberSimpleProfileDtoList: MemberSimpleProfileDTO[];
  totalElements: number;
  currentPageElements: number;
  totalPage: number;
  isFirst: boolean;
  isLast: boolean;
}

export const getSearchPeerType = async (
  peerType: string,
  page: number,
): Promise<ApiResponse<GetSearchPeerTypeResponseDTO>> => {
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
