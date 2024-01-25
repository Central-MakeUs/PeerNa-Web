import { http } from '@apis/index';
import { ReviewPeerRequestDTO } from 'models/review/request/reviewPeerRequestDTO';

export const postReviewPeer = async ({
  targetUuid,
  answerIdList,
  uuid,
  feedback,
  peerGrade,
}: ReviewPeerRequestDTO) => {
  return await http.post(`/review/peer-test?target-uuid=${targetUuid}`, {
    answerIdList,
    uuid,
    feedback,
    peerGrade,
  });
};
