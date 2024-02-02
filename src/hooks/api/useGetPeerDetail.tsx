import { http, ApiResponse } from '@apis/index';
import { OverallOpinionProps } from '@components/pages/mypage/molecule/OverallOpinion';
import { CardType } from '@constants/image';
import { PartType, JobType } from '@constants/member';
import { useSuspenseQuery } from '@tanstack/react-query';

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
