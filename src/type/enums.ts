export const enum RespondType {
  ACCEPT = 'accept',
  DECLINE = 'decline',
}

export enum TestType {
  D = 'D',
  I = 'I',
  S = 'S',
  C = 'C',
  UNKNOWN = 'UNKNOWN',
}

export enum NoticeType {
  INVITE_TO_PROJECT = 'INVITE_TO_PROJECT',
  REQUEST_JOIN_PROJECT = 'REQUEST_JOIN_PROJECT',
  ACCEPT_PROJECT_INVITATION = 'ACCEPT_PROJECT_INVITATION',
  DECLINE_PROJECT_INVITATION = 'DECLINE_PROJECT_INVITATION',
  ACCEPT_PROJECT_JOIN_REQUEST = 'ACCEPT_PROJECT_JOIN_REQUEST',
  DECLINE_PROJECT_JOIN_REQUEST = 'DECLINE_PROJECT_JOIN_REQUEST',
  PEER_TEST_REQUEST = 'PEER_TEST_REQUEST',
  PEER_TEST_RESULT_UPDATE = 'PEER_TEST_RESULT_UPDATE',
}

export enum JobType {
  STUDENT = 'STUDENT',
  JOB_SEEKER = 'JOB_SEEKER',
  WORKER = 'WORKER',
  ENTREPRENEUR = 'ENTREPRENEUR',
  FREELANCER = 'FREELANCER',
  OTHER = 'OTHER',
}

export enum PartType {
  PLANNER = 'PLANNER',
  DESIGNER = 'DESIGNER',
  FRONT_END = 'FRONT_END',
  BACK_END = 'BACK_END',
  MARKETER = 'MARKETER',
  OTHER = 'OTHER',
}

export enum PeerGrade {
  OUTSTANDING = 'OUTSTANDING',
  EXCELLENT = 'EXCELLENT',
  GOOD = 'GOOD',
  AVERAGE = 'AVERAGE',
  BELOW_AVERAGE = 'BELOW_AVERAGE',
  POOR = 'POOR',
  WORST = 'WORST',
}

export enum ResultKeyword {
  DRIVING = 'DRIVING',
  COOPERATIVE = 'COOPERATIVE',
  ANALYTICAL = 'ANALYTICAL',
  COMPREHENSIVE = 'COMPREHENSIVE',
  FUTURE_ORIENTED = 'FUTURE_ORIENTED',
  PRAGMATIC = 'PRAGMATIC',
  MULTIDIMENSIONAL = 'MULTIDIMENSIONAL',
  WARMHEARTED = 'WARMHEARTED',
  CAUTIOUS = 'CAUTIOUS',
  CHALLENGING = 'CHALLENGING',
  LOCKED = 'LOCKED',
}
