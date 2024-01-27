import { JobType, PartType } from '@constants/review';
import { PeerGradeTypes } from '@store/reviewState';

export interface MemberBasicInfoRequestDTO {
  name: string;
  job: JobType;
  part: PartType;
  selfPeerGrade: PeerGradeTypes;
  oneLiner: string;
}
