import { PeerCardType } from '@constants/image';
import { NoticeType } from '@constants/noticeType';
import { JobType, PartType } from '@constants/review';
import { PeerGradeTypes } from '@store/reviewState';

export type ReviewResultType = 'D' | 'I' | 'S' | 'C';

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
  projectId: number;
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

export type CreatorSimpleProfileType = {
  memberId: number;
  name: string;
  job: JobType;
  part: PartType;
  peerTestType: ReviewResultType;
  oneLiner: string;
  totalScore: number;
};

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
  group1: PeerCardType;
  group2: PeerCardType;
  group3: PeerCardType;
  group4: PeerCardType;
}
