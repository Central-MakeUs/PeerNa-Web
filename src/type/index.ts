import { PeerGradeTypes } from '@store/reviewState';
import { JobType, NoticeType, PartType, ResultKeyword, TestType } from '@type/enums';

export type ReviewResultType = 'D' | 'I' | 'S' | 'C';

export type KeywordType = 'D' | 'I' | 'S' | 'C' | 'isDisabled';

export interface ProjectItemType {
  projectId: number;
  projectName: string;
  introduce: string;
  startDate: string;
  endDate: string;
}

export interface NotificationItemType {
  targetId: number;
  noticeType: NoticeType;
  contents: string;
  createdTime: string;
}

export interface ProjectInformationType {
  projectId?: number;
  projectName: string;
  introduce: string;
  startDate: string;
  endDate: string;
  openChattingLink: string;
  notionLink: string;
  githubLink: string;
}

export interface ProjectInformationWithCreatorType
  extends ProjectInformationType {
  creatorSimpleProfileDto: CreatorSimpleProfileType;
}

export interface CreatorSimpleProfileType {
  name: string;
  job: JobType;
  part: PartType;
  peerTestType: TestType;
  totalScore: number;
  oneLiner: string;
};

export interface PeerSimpleProfileType extends CreatorSimpleProfileType {
  memberId: number;
}

export interface MemberDefaultInformationType {
  name: string;
  job: JobType;
  part: PartType;
  oneLiner: string;
}

export interface MemberDefaultInformationTypeWithUuid
  extends MemberDefaultInformationType {
  uuid: string;
}

export interface MemberDefaultInformationTypeWithSelfGrade
  extends MemberDefaultInformationType {
  selfPeerGrade: PeerGradeTypes;
}

export interface ProjectInviteSuccessType {
  memberId: number;
  status: string;
  calledAt: string;
}

export interface MemberReviewResultType {
  memberName: string;
  testType: ReviewResultType;
  group1: ResultKeyword;
  group2: ResultKeyword;
  group3: ResultKeyword;
  group4: ResultKeyword;
}

export interface OverallOpinionProps {
  totalEvaluation: {
    count: number;
    peerGrade: string;
  }[];
}

export interface ProfileCardInfo {
  name: string;
  testType: ResultKeyword;
  part: PartType;
  job: JobType;
  totalScore: number;
  oneLiner: string;
}
