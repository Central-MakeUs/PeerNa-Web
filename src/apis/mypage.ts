import { http } from '.';

/** 마이페이지 조회 */
export const getMypageInfo = async () => {
  return await http.get('/member/mypage');
};

/** 피드백 더보기 */
export const getFeedback = async (page: number) => {
  const response = await http.get('/member/mypage/feedback', {
    params: { page },
  });
  return response;
};
