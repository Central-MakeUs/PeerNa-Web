import { JobType, PartType } from '@constants/member';

export const getPartJobTitle = (
  key: string,
  list: { title: string; job?: JobType; part?: PartType }[],
): string => {
  const partJob = list.find(item => item.job === key || item.part === key);
  return partJob ? partJob.title : '';
};
