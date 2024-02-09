import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

interface MemberPushAgreeResponseDTO extends ProjectInviteSuccessType {}

const postPushAgree = async ({
  pushAgree,
}: {
  pushAgree: boolean;
}): Promise<ApiResponse<MemberPushAgreeResponseDTO>> => {
  return await http.post('/member/push-agree', { pushAgree });
};

export default function usePostPushAgree() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postPushAgree,
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
