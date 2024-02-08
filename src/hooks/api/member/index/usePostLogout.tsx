import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';
import toast from 'react-hot-toast';

interface MemberLogoutRequestDto {
  refreshToken: string;
  fcmToken: string;
}

interface MemberLogoutResponseDTO extends ProjectInviteSuccessType {}

const postLogout = async ({
  refreshToken,
  fcmToken,
}: MemberLogoutRequestDto): Promise<ApiResponse<MemberLogoutResponseDTO>> => {
  return await http.post('/member/logout', {
    refreshToken,
    fcmToken,
  });
};

export default function usePostLogout(errorCallback?: (error: Error) => void) {
  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      toast.success('로그아웃 되었습니다');
    },
    onError: errorCallback,
  });
}
