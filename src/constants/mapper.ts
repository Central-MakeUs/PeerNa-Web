import { JobType, PartType } from '@constants/review';

export const PART_MAPPER: Record<PartType, string> = {
  FRONT_END: 'FE 개발자',
  BACK_END: 'BE 개발자',
  DESIGNER: '디자이너',
  MARKETER: '마케터',
  PLANNER: '기획자',
  OTHER: '기타',
};

export const JOB_MAPPER: Record<JobType, string> = {
  STUDENT: '학생',
  WORKER: '직장인',
  ENTREPRENEUR: '창업가',
  FREELANCER: '프리랜서',
  JOB_SEEKER: '구직자',
  OTHER: '기타',
};
