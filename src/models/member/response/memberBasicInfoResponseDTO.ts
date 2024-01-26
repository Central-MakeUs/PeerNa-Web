import { JobType, PartType } from '@constants/review';

export interface MemberbasicInfoResponseDTO {
  uuid: string;
  name: string;
  job: JobType;
  part: PartType;
  oneLiner: string;
}
