import { getReviewResult, postMemberInfo, postReviewSelf } from '@apis/member';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const usePostMemberInfo = (
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: postMemberInfo,
    onSuccess: successCallback,
    onError: errorCallback,
  });
};

export const usePostReviewSelf = (
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: postReviewSelf,
    onSuccess: successCallback,
    onError: errorCallback,
  });
};

export const useGetReviewResult = () => {
  return useSuspenseQuery({
    queryKey: ['reviewResult'],
    queryFn: getReviewResult,
    select: data => data.result,
  });
};
