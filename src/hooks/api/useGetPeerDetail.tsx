import { CardType } from '@constants/image';
import { JobType, PartType } from '@constants/member';
import { OverallOpinionProps } from '@pages/mypage/index/molecule/OverallOpinion';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponse, http } from 'api';

interface peerDetailDTO {
  peerTestMoreThanThree: boolean;
  memberSimpleProfileDto: ProfileCardInfo;
  peerTestType: string;
  myCardList: CardType[];
  peerCardList: CardType[];
  totalEvaluation: OverallOpinionProps;
  totalScore: number;
  peerFeedbackList: string[];
  peerAnswerIdList: number[];
  colorAnswerIdList: number[];
  peerProjectDtoList: PeerProjectList[];
}

export interface ProfileCardInfo {
  memberId: number;
  name: string;
  job: JobType;
  part: PartType;
  peerTestType: CardType;
  oneLiner: string;
  totalScore: number;
}

export interface PeerProjectList {
  projectId: number;
  projectName: string;
  introduce: string;
  startDate: string;
  endDate: string;
}

export const getPeerDetail = async (
  peerId: number,
): Promise<ApiResponse<peerDetailDTO>> => {
  const response = await http.get(`/home/${peerId}/peer-detail`);
  return response.data;
};

export const useGetPeerDetail = (peerId: number) => {
  return useSuspenseQuery({
    queryKey: ['useGetPeerDetail', peerId],
    queryFn: () => getPeerDetail(peerId),
    select: data => data.result,
  });
};
