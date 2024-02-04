import { CardType } from '@constants/image';
import { OverallOpinionProps } from '@pages/mypage/index/molecule/OverallOpinion';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CreatorSimpleProfileType, ProjectItemType } from '@type/index';
import { ApiResponse, http } from 'API';

// Sarah) interface 상속을 통해 중복되는 부분은 따로 선언하고 다른 부분만 따로 정의하기
interface PeerDetailResponseDTO {
  peerTestMoreThanThree: boolean;
  memberSimpleProfileDto: CreatorSimpleProfileType;
  peerTestType: string;
  myCardList: CardType[];
  peerCardList: CardType[];
  totalEvaluation: OverallOpinionProps;
  totalScore: number;
  peerFeedbackList: string[];
  peerAnswerIdList: number[];
  colorAnswerIdList: number[];
  peerProjectDtoList: ProjectItemType[];
}

const getPeerDetail = async (
  peerId: number,
): Promise<ApiResponse<PeerDetailResponseDTO>> => {
  const response = await http.get(`/home/${peerId}/peer-detail`);
  return response.data;
};

export default function useGetPeerDetail(peerId: number) {
  return useSuspenseQuery({
    queryKey: ['useGetPeerDetail', peerId],
    queryFn: () => getPeerDetail(peerId),
    select: data => data.result,
  });
}
