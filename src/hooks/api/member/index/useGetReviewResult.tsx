import { QUERY_KEY } from '@constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MemberReviewResultType } from '@type/index';
import { ApiResponse, http } from '@utils/API';

interface ReviewResultResponseDTO extends MemberReviewResultType {}

const getReviewResult = async (): Promise<
  ApiResponse<ReviewResultResponseDTO>
> => {
  const response = await http.get('/member/self-test-result');
  return response.data;
};

export default function useGetReviewResult() {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.REVIEW_RESULT],
    queryFn: getReviewResult,
    select: data => data.result,
  });
}
