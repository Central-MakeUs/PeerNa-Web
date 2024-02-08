import { PeerGradeTypes } from '@store/reviewState';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse, http } from '@utils/API';
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

const postReviewPeer = async ({
  targetUuid,
  answerIdList,
  uuid,
  feedback,
  peerGrade,
}: ReviewPeerRequestDTO): Promise<ApiResponse<ReviewPeerResponseDTO>> => {
  return await http.post(`/review/peer-test?target-uuid=${targetUuid}`, {
    answerIdList,
    uuid,
    feedback,
    peerGrade,
  });
};

export default function usePostReviewPeer(
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postReviewPeer,
    onSuccess: () => {
      toast.success('리뷰가 완료되었습니다.');
    },
    onError: errorCallback,
  });
}
