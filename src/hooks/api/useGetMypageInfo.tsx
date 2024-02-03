import { CardType } from '@constants/image';
import { OverallOpinionProps } from '@pages/mypage/index/molecule/OverallOpinion';
import { ProfileCardInfo } from '@pages/mypage/index/molecule/ProfileCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponse, http } from 'api';

interface MyPageDTO {
  peerTestMoreThanTree: boolean;
  memberMyPageInfoDto: ProfileCardInfo;
  peerTestType: string;
  selfTestCardList: CardType[];
  peerCardList: CardType[];
  totalEvaluation: OverallOpinionProps;
  totalScore: number;
  peerFeedbackList: string[];
  selfTestAnswerIdList: number[];
  colorAnswerIdList: number[];
}

export const getMyPageInfo = async (): Promise<ApiResponse<MyPageDTO>> => {
  const response = await http.get('/member/mypage');
  return response.data;
};

export const useGetMyPageInfo = () => {
  return useSuspenseQuery({
    queryKey: ['getMyPageInfo'],
    queryFn: getMyPageInfo,
    select: data => data.result,
  });
};
