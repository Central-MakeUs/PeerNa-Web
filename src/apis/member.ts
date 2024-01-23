import { http } from '@apis/index';
import { ApiResponse } from 'models';
import { MemberBasicInfoRequestDTO } from 'models/member/request/memberBasicInfoRequestDTO';
import { MemberbasicInfoResponseDTO } from 'models/member/response/memberBasicInfoResponseDTO';

export const postMemberInfo = async ({
  name,
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
