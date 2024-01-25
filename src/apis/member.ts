import { http } from '@apis/index';
import { ApiResponse } from 'models';
import { MemberBasicInfoRequestDTO } from 'models/member/request/memberBasicInfoRequestDTO';
import { MemberbasicInfoResponseDTO } from 'models/member/response/memberBasicInfoResponseDTO';
import { MemberMeResponseDTO } from 'models/member/response/memberMeResponseDTO';
import { MemberReviewResultResponseDTO } from 'models/member/response/memberReviewResultResponseDTO';
import { MemberUserNameResponseDTO } from 'models/member/response/memberUserNameResponseDTO';

export const postMemberInfo = async ({
  job,
  part,
  selfPeerGrade,
  oneLiner,
}: MemberBasicInfoRequestDTO): Promise<
  ApiResponse<MemberbasicInfoResponseDTO>
> => {
  return await http.post('/member/basic-info', {
    name,
    job,
    part,
    selfPeerGrade,
    oneLiner,
  });
};

export const postReviewSelf = async (answerIdList: number[]) => {
  return await http.post('/member/self-test', { answerIdList });
};

export const getReviewResult = async (): Promise<
  ApiResponse<MemberReviewResultResponseDTO>
> => {
  const response = await http.get('/member/self-test-result');
  return response.data;
};

export const getUserName = async (
  uuid: string,
): Promise<ApiResponse<MemberUserNameResponseDTO>> => {
  const response = await http.get(`/member/name?uuid=${uuid}`);
  return response.data;
};

export const getMe = async (): Promise<ApiResponse<MemberMeResponseDTO>> => {
  const response = await http.get('/member/me');
  return response.data;
};
