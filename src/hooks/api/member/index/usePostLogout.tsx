import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';

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

export default function usePostLogout(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postLogout,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
