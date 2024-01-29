import { http, ApiResponse } from '@apis/index';
import { PeerCardType } from '@constants/image';
import { useSuspenseQuery } from '@tanstack/react-query';

type ReviewResultType = 'C' | 'I' | 'D' | 'S';

interface SelfReviewResultDTO {
  memberName: string;
  testType: ReviewResultType;
  group1: PeerCardType;
  group2: PeerCardType;
  group3: PeerCardType;
  group4: PeerCardType;
}

const getReviewResult = async (): Promise<ApiResponse<SelfReviewResultDTO>> => {
  const response = await http.get('/member/self-test-result');
  return response.data;
};

export const useGetReviewResult = () => {
  return useSuspenseQuery({
    queryKey: ['getReviewResult'],
    queryFn: getReviewResult,
    select: data => data.result,
  });
};
