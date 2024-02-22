import { queryClient } from '@/main';
import { QUERY_KEY } from '@constants/queryKey';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse, http } from '@utils/API';

const postPeerReviewReject = async (targetId: string): Promise<ApiResponse> => {
  return await http.post(`/review/peer-test/${targetId}/reject`);
};

export default function usePostPeerReviewReject(
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postPeerReviewReject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.PEER_REVIEW_NOTIFICATION],
      });
    },
    onError: errorCallback,
  });
}
