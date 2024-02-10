import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

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

export default function usePostLogout() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postLogout,
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
