import { AxiosResponse } from 'axios';
import { getMypageInfo } from '@apis/mypage';
import { useQuery } from '@tanstack/react-query';
import { ProfileCardInfo } from '@components/pages/mypage/molecule/ProfileCard';
import { CardType } from '@constants/image';
import { OverallOpinionProps } from '@components/pages/mypage/molecule/OverallOpinion';

interface MyPageResponse {
  code: number;
  message: string;
  result: MyPageInfo;
}

interface MyPageInfo {
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

export const useMyPageInfo = () => {
  const { data, error, isLoading, isError } = useQuery<MyPageInfo, Error>({
    queryKey: ['mypageInfo'],
    queryFn: async () => {
      const response: AxiosResponse<MyPageResponse> = await getMypageInfo();

      if (!response.data) {
        throw new Error('오류발생!');
      }

      const responseData: MyPageInfo = response.data.result;
      return responseData;
    },
    staleTime: 60 * 60 * 1000,
  });

  return { data, error, isLoading, isError };
};
