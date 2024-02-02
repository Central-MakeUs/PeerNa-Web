export type JobType =
  | 'STUDENT'
  | 'JOB_SEEKER'
  | 'WORKER'
  | 'ENTREPRENEUR'
  | 'FREELANCER'
  | 'OTHER'
  | '';

export const JOB_LIST: {
  title: string;
  job: JobType;
}[] = [
  { title: '대학생', job: 'STUDENT' },
  { title: '취준생', job: 'JOB_SEEKER' },
  { title: '직장인', job: 'WORKER' },
  { title: '창업가', job: 'ENTREPRENEUR' },
  { title: '프리랜서', job: 'FREELANCER' },
  { title: '기타', job: 'OTHER' },
];

export type PartType =
  | 'PLANNER'
  | 'DESIGNER'
  | 'FRONT_END'
  | 'BACK_END'
  | 'MARKETER'
  | 'OTHER'
  | 'ALL';

export const PART_LIST: {
  title: string;
  part: PartType;
}[] = [
  { title: '전체', part: 'ALL' },
  { title: '기획자', part: 'PLANNER' },
  { title: '디자이너', part: 'DESIGNER' },
  { title: 'FE개발자', part: 'FRONT_END' },
  { title: 'BE개발자', part: 'BACK_END' },
  { title: '기타', part: 'OTHER' },
];
