import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';

interface MemberWithdrawalResponseDTO extends ProjectInviteSuccessType {}

const postMemberWithdrawal = async (): Promise<
  ApiResponse<MemberWithdrawalResponseDTO>
> => {
  return await http.post('/member/withdrawal');
};

export default function usePostMemberWithdrawal(
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postMemberWithdrawal,

    onError: errorCallback,
  });
}
