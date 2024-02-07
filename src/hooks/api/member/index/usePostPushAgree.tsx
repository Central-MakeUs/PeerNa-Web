import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';

interface MemberPushAgreeResponseDTO extends ProjectInviteSuccessType {}

const postPushAgree = async ({
  pushAgree,
}: {
  pushAgree: boolean;
}): Promise<ApiResponse<MemberPushAgreeResponseDTO>> => {
  return await http.post('/member/push-agree', { pushAgree });
};

export default function usePostPushAgree(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postPushAgree,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
