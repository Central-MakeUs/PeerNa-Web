import { ProfileCardInfo } from '@components/pages/mypage/molecule/ProfileCard';
import { http } from '.';
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

/** 마이페이지 조회 */
export const getMypageInfo = () => {
  return http.get<MyPageResponse>('/member/mypage');
};

/** 피드백 더보기 */
export const getFeedback = async (page: number) => {
  const response = await http.get('/member/mypage/feedback', {
    params: { page },
  });
  return response;
};

/** 유저 정보 조회 */
export const getProfileInfo = async () => {
  return await http.get('/member/me');
};

interface ProfileEdit {
  job: string;
  part: string;
  oneLiner: string;
}

/** 프로필 수정 */
export const editProfileInfo = async (body: ProfileEdit) => {
  return await http.patch('/member/mypage/profile', body);
};
