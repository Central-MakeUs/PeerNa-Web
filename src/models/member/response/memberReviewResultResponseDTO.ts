import { PeerCardType } from '@constants/image';
import { ReviewResultType } from '@type/index';

export interface MemberReviewResultResponseDTO {
  memberName: string;
  testType: ReviewResultType;
  group1: PeerCardType;
  group2: PeerCardType;
  group3: PeerCardType;
  group4: PeerCardType;
}
