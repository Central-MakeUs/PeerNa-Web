import { http, ApiResponse } from '@apis/index';
import { useMutation } from '@tanstack/react-query';

interface MemberProfileEditRequestDTO {
  job: string;
  part: string;
  oneLiner: string;
}

interface MemberProfileEditDTO {
  job: string;
  part: string;
  oneLiner: string;
}

export const editProfileInfo = async ({
  job,
  part,
  oneLiner,
}: MemberProfileEditRequestDTO): Promise<ApiResponse<MemberProfileEditDTO>> => {
  return await http.patch('/member/mypage/profile', {
    job,
    part,
    oneLiner,
  });
};

export const usePatchMyProfile = (
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: editProfileInfo,
    onSuccess: successCallback,
    onError: errorCallback,
  });
};
