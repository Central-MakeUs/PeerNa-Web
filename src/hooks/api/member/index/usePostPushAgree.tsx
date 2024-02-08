import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';
import toast from 'react-hot-toast';

interface MemberPushAgreeResponseDTO extends ProjectInviteSuccessType {}

const postPushAgree = async ({
  pushAgree,
}: {
  pushAgree: boolean;
}): Promise<ApiResponse<MemberPushAgreeResponseDTO>> => {
  return await http.post('/member/push-agree', { pushAgree });
};

export default function usePostPushAgree(
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postPushAgree,
    onSuccess: () => {
      toast.success('알림설정이 완료되었습니다');
    },
    onError: errorCallback,
  });
}
