import { http } from '@apis/index';
import { useMutation } from '@tanstack/react-query';

export type ApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
};

interface MemberProfileEditRequestDTO {
  job: string;
  part: string;
  oneLiner: string;
}

interface MemberProfileEditResponseDTO {
  job: string;
  part: string;
  oneLiner: string;
}

export const editProfileInfo = async ({
  job,
  part,
  oneLiner,
}: MemberProfileEditRequestDTO): Promise<
  ApiResponse<MemberProfileEditResponseDTO>
> => {
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
