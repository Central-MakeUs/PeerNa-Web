export const REVIEW_SELF_TITLE = [
  '이름을 알려주세요.',
  '현재 직업은 무엇인가요?',
  '어떤 역할을 맡고 있나요?',
];

export const JOB_LIST = [
  '대학생',
  '취준생',
  '직장인',
  '창업가',
  '프리랜서',
  '기타',
];

export const POSITION_LIST = [
  '기획자',
  '디자이너',
  'FE개발자',
  'BE개발자',
  '기타',
];

export const REVIEW_TITLE = {
  self: [
    '업무 시 나의 성향은',
    '업무 시 나의 사고 방식은',
    '업무 시 나의 소통 방식은',
    '업무 시 나의 결정 방식은',
  ],
  peer: (peerName: string) => [
    `업무 시 ${peerName}님의 성향은`,
    `업무 시 ${peerName}님의 사고 방식은`,
    `업무 시 ${peerName}님의 소통 방식은`,
    `업무 시 ${peerName}님의 결정 방식은`,
  ],
  peerReviewPrompt: (peerName?: string) =>
    `동료들에게 ${peerName ? `${peerName}님은` : '나는'} 어떤 동료일까요?`,
  oneLineReviewPrompt: (
    peerName?: string,
  ) => `동료로서의 ${peerName ? `${peerName}님을` : '나를'}
    한 줄로 설명한다면?`,
};

export const REVIEW_PICKER: { [key: number]: string[] } = {
  1: [
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
  2: [
    '비판적',
    '낙관적',
    '나무를 보는',
    '숲을 보는',
    '계획적',
    '유연한',
    '확고한',
    '관대한',
  ],
  3: [
    '직설적',
    '우회적',
    '객관적인 피드백',
    '정서적인 피드백',
    '주관이 뚜렷한',
    '수용을 잘하는',
    '의논 후 고민',
    '고민 후 의논',
  ],
  4: [
    '수치에 의존하는',
    '직관에 의존하는',
    '신중한',
    '신속한',
    '원리원칙에 따르는',
    '융통성있는',
    '관습을 따르는',
    '도전하는',
    '보수적',
    '개방적',
  ],
};