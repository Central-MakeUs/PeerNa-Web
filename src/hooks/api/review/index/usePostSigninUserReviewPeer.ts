import { PeerGradeTypes } from '@store/reviewState';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse, http } from '@utils/API';

interface SigninUserReviewPeerRequestDTO {
  targetId: string;
  answerIdList: number[];
  peerGrade: PeerGradeTypes;
  feedback: string;
}

interface SigninUserReviewPeerResponseDTO {
  peerTestId: number;
}

const postUserSigninUser = async ({
  targetId,
  answerIdList,
  feedback,
  peerGrade,
}: SigninUserReviewPeerRequestDTO): Promise<
  ApiResponse<SigninUserReviewPeerResponseDTO>
> => {
  return await http.post(`/review/peer-test/${targetId}`, {
    answerIdList,
    uuid: '',
    feedback,
    peerGrade,
  });
};

export default function usePostSigninUserReviewPeer(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postUserSigninUser,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
