import { QUERY_KEY } from '@constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';

interface MemberWithdrawalResponseDTO extends ProjectInviteSuccessType {}

const postMemberWithdrawal = async (
  refreshToken: string,
): Promise<ApiResponse<MemberWithdrawalResponseDTO>> => {
  return await http.post('/member/withdrawal', { refreshToken });
};

export default function usePostMemberWithdrawal(
  errorCallback?: (error: Error) => void,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postMemberWithdrawal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MYPAGE_INFO] });
    },
    onError: errorCallback,
  });
}
