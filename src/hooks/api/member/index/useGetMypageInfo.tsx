import { CardType } from '@constants/image';
import { OverallOpinionProps } from '@pages/mypage/index/molecule/OverallOpinion';
import { ProfileCardInfo } from '@pages/mypage/index/molecule/ProfileCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponse, http } from '@utils/API';

// Sarah) interface 상속을 통해 중복되는 부분은 따로 선언하고 다른 부분만 따로 정의하기
interface MyPageResponseDTO {
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

const getMyPageInfo = async (): Promise<ApiResponse<MyPageResponseDTO>> => {
  const response = await http.get('/member/mypage');
  return response.data;
};

export default function useGetMyPageInfo() {
  return useSuspenseQuery({
    queryKey: ['getMyPageInfo'],
    queryFn: getMyPageInfo,
    select: data => data.result,
  });
}
