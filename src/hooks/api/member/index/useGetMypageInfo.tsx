import { QUERY_KEY } from '@constants/queryKey';
import { OverallOpinionProps } from '@pages/mypage/index/molecule/OverallOpinion';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ResultKeyword, TestType } from '@type/enums';
import { PeerSimpleProfileType } from '@type/index';
import { ApiResponse, http } from '@utils/API';

export interface ProfileResponseDTO {
  peerTestMoreThanThree: boolean;
  peerCardList: ResultKeyword[];
  peerFeedbackList: string[];
  totalEvaluation: OverallOpinionProps;
  totalScore: number;
  colorAnswerIdList: number[];
}

export interface MyPageResponseDTO extends ProfileResponseDTO {
  memberMyPageInfoDto: PeerSimpleProfileType;
  peerTestType: TestType;
  selfTestCardList: ResultKeyword[];
  selfTestAnswerIdList: number[];
  colorAnswerIdList: number[];
}

const getMyPageInfo = async (): Promise<ApiResponse<MyPageResponseDTO>> => {
  const response = await http.get('/member/mypage');
  return response.data;
};

export default function useGetMyPageInfo() {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.MYPAGE_INFO],
    queryFn: getMyPageInfo,
    select: data => data.result,
  });
}
