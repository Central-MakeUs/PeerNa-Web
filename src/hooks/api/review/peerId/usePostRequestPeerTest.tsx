import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';

const postRequestPeerReview = async ({
  peerId,
}: {
  peerId: string;
}): Promise<ApiResponse<ProjectInviteSuccessType>> => {
  return await http.post(`review/request?peer-id=${peerId}`, {
    peerId,
  });
};

export default function usePostRequestPeerTest(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postRequestPeerReview,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}