import { http, ApiResponse } from '@apis/index';
import { useQuery } from '@tanstack/react-query';

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

export const getSearchPeerPart = async (
  peerPart: string,
  page: number,
): Promise<ApiResponse<MemberSimpleDTOPage>> => {
  const response = await http.get(
    `/home/search/peer-part?part=${peerPart}&page=${page}`,
  );
  return response.data;
};

export const useGetSearchPeerPart = (peerPart: string, page: number) => {
  const query = useQuery({
    queryKey: ['getSearchPeerPart', peerPart, page],
    queryFn: () => getSearchPeerPart(peerPart, page),
    select: data => data.result,
  });

  const refetch = async () => {
    await query.refetch();
  };

  return {
    ...query,
    refetch: refetch,
  };
};
