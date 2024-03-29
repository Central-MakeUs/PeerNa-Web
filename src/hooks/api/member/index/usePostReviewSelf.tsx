import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { MemberReviewResultType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

interface ReviewSelfResponseDTO extends MemberReviewResultType {}

const postReviewSelf = async (
  answerIdList: number[],
): Promise<ApiResponse<ReviewSelfResponseDTO>> => {
  return await http.post('/member/self-test', { answerIdList });
};

export default function usePostReviewSelf() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postReviewSelf,
    onSuccess: () => {},
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
