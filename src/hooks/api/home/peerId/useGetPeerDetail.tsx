import { QUERY_KEY } from '@constants/queryKey';
import { ProfileResponseDTO } from '@hooks/api/member/index/useGetMypageInfo';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ResultKeyword } from '@type/enums';
import { PeerSimpleProfileType, ProjectItemType } from '@type/index';
import { ApiResponse, http } from '@utils/API';

interface PeerProfileResponseDTO extends ProfileResponseDTO {
  memberSimpleProfileDto: PeerSimpleProfileType;
  myCardList: ResultKeyword[];
  peerAnswerIdList: number[];
  peerProjectDtoList: ProjectItemType[];
}

const getPeerDetail = async (
  peerId: number,
): Promise<ApiResponse<PeerProfileResponseDTO>> => {
  const response = await http.get(`/home/${peerId}/peer-detail`);
  return response.data;
};

export default function useGetPeerDetail(peerId: number) {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.MORE_PEER_PROJECT, peerId],
    queryFn: () => getPeerDetail(peerId),
    select: data => data.result,
  });
}
