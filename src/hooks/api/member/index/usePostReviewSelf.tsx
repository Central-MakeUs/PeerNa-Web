import { useMutation } from '@tanstack/react-query';
import { MemberReviewResultType } from '@type/index';
import { ApiResponse, http } from 'API';

interface ReviewSelfResponseDTO extends MemberReviewResultType {}

const postReviewSelf = async (
  answerIdList: number[],
): Promise<ApiResponse<ReviewSelfResponseDTO>> => {
  return await http.post('/member/self-test', { answerIdList });
};

export default function usePostReviewSelf(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postReviewSelf,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
