import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

interface PostReviewUpdateMemberId extends ProjectInviteSuccessType {}

const postReviewUpdateMemberId = async (
  uuid: string,
): Promise<ApiResponse<PostReviewUpdateMemberId>> => {
  return await http.post(`/review/update-member-id`, {
    uuid,
  });
};

export default function usePostReviewUpdateMemberId() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postReviewUpdateMemberId,
    onSuccess: () => {},
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
