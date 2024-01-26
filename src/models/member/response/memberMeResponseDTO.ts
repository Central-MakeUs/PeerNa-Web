import { JobType, PartType } from '@constants/review';

export interface MemberMeResponseDTO {
  name: string;
  job: JobType;
  part: PartType;
  oneLiner: string;
  uuid: string;
}
