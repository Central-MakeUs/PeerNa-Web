import { useMutation } from '@tanstack/react-query';
import { MemberReviewResultType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import toast from 'react-hot-toast';

interface ReviewSelfResponseDTO extends MemberReviewResultType {}

const postReviewSelf = async (
  answerIdList: number[],
): Promise<ApiResponse<ReviewSelfResponseDTO>> => {
  return await http.post('/member/self-test', { answerIdList });
};

export default function usePostReviewSelf(
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postReviewSelf,
    onSuccess: () => {
      toast.success('리뷰가 완료되었습니다.');
    },
    onError: errorCallback,
  });
}
