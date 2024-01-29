import { http, ApiResponse } from '@apis/index';
import { useQuery } from '@tanstack/react-query';

export interface MemberSimpleProfileDTO {
  memberId: number;
  name: 'string';
  job: 'string';
  part: 'string';
  peerTestType: 'D' | 'I' | 'S' | 'C';
  oneLiner: 'string';
  totalScore: number;
}

interface GetSearchPeerPartResponseDTO {
  memberSimpleProfileDtoList: MemberSimpleProfileDTO[];
}

export const getSearchPeerPart = async (
  peerPart: string,
  page: number,
): Promise<ApiResponse<GetSearchPeerPartResponseDTO>> => {
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
