import { http } from '@apis/index';
import { OverallOpinionProps } from '@components/pages/mypage/molecule/OverallOpinion';
import { ProfileCardInfo } from '@components/pages/mypage/molecule/ProfileCard';
import { CardType } from '@constants/image';
import { useSuspenseQuery } from '@tanstack/react-query';

export type ApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
};

interface MemberMyPageResponseDTO {
  peerTestMoreThanTree: boolean;
  memberSimpleInfoDto: ProfileCardInfo;
  peerTestType: string;
  selfTestCardList: CardType[];
  peerCardList: CardType[];
  totalEvaluation: OverallOpinionProps;
  totalScore: number;
  peerFeedbackList: string[];
  selfTestAnswerIdList: number[];
  colorAnswerIdList: number[];
}

export const getMyPageInfo = async (): Promise<
  ApiResponse<MemberMyPageResponseDTO>
> => {
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
