export type Job = {
  key: string;
  text: string;
};

export type Part = {
  key: string;
  text: string;
};

export const JobList: Job[] = [
  { key: 'STUDENT', text: '대학생' },
  { key: 'JOB_SEEKER', text: '취준생' },
  { key: 'WORKER', text: '직장인' },
  { key: 'ENTREPRENEUR', text: '창업가' },
  { key: 'FREELANCER', text: '프리랜서' },
  { key: 'OTHER', text: '기타' },
];

export const PartList: Part[] = [
  { key: 'PLANNER', text: '기획자' },
  { key: 'DESIGNER', text: '디자이너' },
  { key: 'FRONT_END', text: 'FE개발자' },
  { key: 'BACK_END', text: 'BE개발자' },
  { key: 'OTHER', text: '기타' },
];
