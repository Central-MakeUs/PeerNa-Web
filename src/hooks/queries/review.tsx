import { postReviewPeer } from '@apis/review';
import { useMutation } from '@tanstack/react-query';

export const usePostReviewPeer = (
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: postReviewPeer,
    onSuccess: successCallback,
    onError: errorCallback,
  });
};
