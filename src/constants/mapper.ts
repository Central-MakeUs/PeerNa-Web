import { JobType, NoticeType, PartType, TestType } from '@type/enums';
import { KeywordType } from '@type/index';
import { KeywordResultList } from '@type/value';

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

export const NOTICE_MAPPER: Record<NoticeType, string> = {
  INVITE_TO_PROJECT: '프로젝트 초대',
  REQUEST_JOIN_PROJECT: '프로젝트 참여 신청',
  ACCEPT_PROJECT_INVITATION: '프로젝트 초대 수락',
  DECLINE_PROJECT_INVITATION: '프로젝트 초대 거절',
  ACCEPT_PROJECT_JOIN_REQUEST: '프로젝트 참여 요청 수락',
  DECLINE_PROJECT_JOIN_REQUEST: '프로젝트 참여 요청 거절',
};

export const ICON_MAPPER: Record<TestType, string> = {
  D: 'bg-D',
  I: 'bg-I',
  S: 'bg-S',
  C: 'bg-C',
};

export const KEYWORD_MAPPER: Record<KeywordType, KeywordResultList> = {
  D: {
    keywords: [
      '좋은 리더',
      '좋은 팔로워',
      '과업 지향',
      '관계 지향',
      '자신감 있는',
      '겸손한',
      '자율 추구',
      '체계 추구',
      '활기 있는',
      '여유 있는',
    ],
    icons: [
      'Leader',
      'Follower',
      'Result',
      'Relation',
      'Confident',
      'Humble',
      'Voluntarily',
      'Systematic',
      'Passionate',
      'Relaxed',
    ],
  },
  I: {
    keywords: [
      '비판적',
      '낙관적',
      '나무를 보는',
      '숲을 보는',
      '계획적',
      '유연한',
      '확고한',
      '관대한',
    ],
    icons: [
      'Critical',
      'Optimistic',
      'Tree',
      'Forest',
      'Planned',
      'Flexible',
      'Firm',
      'Generous',
    ],
  },
  S: {
    keywords: [
      '직설적',
      '우회적',
      '객관적인 피드백',
      '정서적인 피드백',
      '주관이 뚜렷한',
      '수용을 잘하는',
      '의논 후 고민',
      '고민 후 의논',
    ],
    icons: [
      'Straight',
      'Indirect',
      'Objective',
      'Sincere',
      'Subjective',
      'Receptive',
      'AfterConcern',
      'BeforeConcern',
    ],
  },
  C: {
    keywords: [
      '수치에 의존하는',
      '직감에 의존하는',
      '신중한',
      '신속한',
      '원리원칙에 따르는',
      '융통성 있는',
      '관습을 따르는',
      '도전하는',
      '보수적',
      '개방적',
    ],
    icons: [
      'Statistic',
      'Intuitive',
      'Careful',
      'Expedite',
      'Principle',
      'Compromising',
      'Conventional',
      'Challenging',
      'Conservative',
      'Open',
    ],
  },
  isDisabled: { keywords: [], icons: [] },
};
