import {
  getMe,
  getReviewResult,
  getUserName,
  postMemberInfo,
  postReviewSelf,
} from '@apis/member';
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
    queryKey: ['getReviewResult'],
    queryFn: getReviewResult,
    select: data => data.result,
  });
};

export const useGetUserName = (uuid: string) => {
  return useSuspenseQuery({
    queryKey: ['getUserName', uuid],
    queryFn: () => getUserName(uuid),
    select: data => data.result,
  });
};

export const useGetMe = () => {
  return useSuspenseQuery({
    queryKey: ['getMe'],
    queryFn: getMe,
    select: data => data.result,
  });
};
