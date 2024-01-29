import { http, ApiResponse } from '@apis/index';
import { PeerCardType } from '@constants/image';
import { useMutation } from '@tanstack/react-query';

type ReviewResultType = 'C' | 'I' | 'D' | 'S';

interface MemberReviewResultResponseDTO {
  memberName: string;
  testType: ReviewResultType;
  group1: PeerCardType;
  group2: PeerCardType;
  group3: PeerCardType;
  group4: PeerCardType;
}

const postReviewSelf = async (
  answerIdList: number[],
): Promise<ApiResponse<MemberReviewResultResponseDTO>> => {
  return await http.post('/member/self-test', { answerIdList });
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
