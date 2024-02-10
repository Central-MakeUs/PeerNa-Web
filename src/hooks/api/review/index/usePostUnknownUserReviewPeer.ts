import useErrorHandler from '@hooks/common/useErrorHandler';
import { PeerGradeTypes } from '@store/reviewState';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

interface ReviewPeerRequestDTO {
  targetUuid: string;
  answerIdList: number[];
  peerGrade: PeerGradeTypes;
  feedback: string;
  uuid: string;
}

interface ReviewPeerResponseDTO {
  peerTestId: number;
}

const postUnknownUserReviewPeer = async ({
  targetUuid,
  answerIdList,
  uuid,
  feedback,
  peerGrade,
}: ReviewPeerRequestDTO): Promise<ApiResponse<ReviewPeerResponseDTO>> => {
  return await http.post(
    `/review/non-member/peer-test?target-uuid=${targetUuid}`,
    {
      answerIdList,
      uuid,
      feedback,
      peerGrade,
    },
  );
};

export default function usePostReviewPeer() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postUnknownUserReviewPeer,
    onSuccess: () => {
      toast.success('리뷰가 완료되었습니다.');
    },
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
