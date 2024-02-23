import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

const postRequestPeerReview = async ({
  peerId,
}: {
  peerId: number;
}): Promise<ApiResponse<ProjectInviteSuccessType>> => {
  return await http.post(`review/request/${peerId}`, {
    peerId,
  });
};

export default function usePostRequestPeerTest() {
  const { handleError } = useErrorHandler();

  return useMutation({
    mutationFn: postRequestPeerReview,
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
