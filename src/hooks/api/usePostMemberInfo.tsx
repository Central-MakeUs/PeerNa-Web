import { JobType, PartType } from '@constants/review';
import { PeerGradeTypes } from '@store/reviewState';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse, http } from 'api';

interface MemberBasicInfoRequestDTO {
  name: string;
  job: JobType;
  part: PartType;
  selfPeerGrade: PeerGradeTypes;
  oneLiner: string;
}

interface MemberbasicInfoDTO {
  uuid: string;
  name: string;
  job: JobType;
  part: PartType;
  oneLiner: string;
}

export const postMemberInfo = async ({
  name,
  job,
  part,
  selfPeerGrade,
  oneLiner,
}: MemberBasicInfoRequestDTO): Promise<ApiResponse<MemberbasicInfoDTO>> => {
  return await http.post('/member/basic-info', {
    name,
    job,
    part,
    selfPeerGrade,
    oneLiner,
  });
};

export const usePostMemberInfo = (
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: postMemberInfo,
    onSuccess: successCallback,
    onError: errorCallback,
  });
};
