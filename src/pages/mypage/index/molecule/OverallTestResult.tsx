import Typography from '@components/common/atom/Typography';
import KeywordCard from '@components/common/molecule/KeywordCard';
import { KEYWORD_CARD_INFO } from '@constants/list';
import { KEYWORD_MAPPER } from '@constants/mapper';
import PeerToolTip from '@pages/mypage/index/atom/PeerToolTip';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import { KeywordType } from '@type';
import { ResultKeyword, TestType } from '@type/enums';
import { Fragment } from 'react';

interface OverallTestResultProps {
  colorAnswerIdList: number[];
  selfTestAnswerIdList: number[];
  peerCardList: ResultKeyword[];
  type: 'self' | 'peer';
}

export default function OverallTestResult({
  colorAnswerIdList,
  selfTestAnswerIdList,
  peerCardList,
  type,
}: OverallTestResultProps) {
  const separateIdsByType = (idList: number[]) => {
    const result: { [key: string]: number[] } = { D: [], I: [], S: [], C: [] };

    idList.forEach(id => {
      if (id <= 10) result.D.push(id);
      else if (id <= 18) result.I.push(id - 10);
      else if (id <= 26) result.S.push(id - 18);
      else if (id <= 36) result.C.push(id - 26);
    });

    return result;
  };

  const PeerKeywordList = [
    '가치관이 잘 맞는 동료와 함께 한다면 이해와 존중을 바탕으로 원활하게 협력하며 공동의 목표를 향해 함께 성장할 수 있어요.',
    '소통 방식이 잘 맞는 동료와 함께 한다면 오해나 갈등 없이 자유롭게 의견을 나누며 높은 업무 효율성으로 팀의 성과를 향상시킬 수 있어요.',
    '사고 방식이 잘 맞는 동료와 함께 한다면 빠르고 효율적으로 문제의 해결책을 찾아 보다 많은 가능성을 탐색하며 효과적인 전략을 세울 수 있어요.',
    '결정 방식이 잘 맞는 동료와 함께 한다면 존중을 바탕으로 신속하고 효율적인 결정을 통해 지체 없이 팀의 목표를 달성할 수 있어요. ',
  ];

  const selfIdList = separateIdsByType(selfTestAnswerIdList);
  const colorIdList = separateIdsByType(colorAnswerIdList);

  const getKeywordsByIdList = (testType: KeywordType, ids: number[]) => {
    return ids.map(id => KEYWORD_MAPPER[testType].keywords[id - 1]);
  };

  const title =
    type === 'self' ? '나도 알고 동료도 아는 내 모습' : '나와 동료의 공통점';

  return (
    <Fragment>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-[6px]">
          <Typography
            variant="header03"
            fontColor="gray08"
            className="!font-semibold"
          >
            {title}
          </Typography>
          <PeerToolTip type={type} />
        </div>
      </HeaderContainer>
      <section className="flex flex-col gap-3 items-center px-4">
        <KeywordCard
          title="가치관"
          subtitle={
            type === 'self'
              ? (KEYWORD_CARD_INFO[peerCardList[0]].content as string)
              : (PeerKeywordList[0] as string)
          }
          testType="D"
          keywords={getKeywordsByIdList(TestType.D, selfIdList.D)}
          colorAnswerIdList={colorIdList.D}
          selfTestIdList={selfIdList.D}
        />
        <KeywordCard
          title="소통 방식"
          subtitle={
            type === 'self'
              ? (KEYWORD_CARD_INFO[peerCardList[1]].content as string)
              : (PeerKeywordList[1] as string)
          }
          testType="I"
          keywords={getKeywordsByIdList(TestType.I, selfIdList.I)}
          colorAnswerIdList={colorIdList.I}
          selfTestIdList={selfIdList.I}
        />
        <KeywordCard
          title="사고 방식"
          subtitle={
            type === 'self'
              ? (KEYWORD_CARD_INFO[peerCardList[2]].content as string)
              : (PeerKeywordList[2] as string)
          }
          testType="S"
          keywords={getKeywordsByIdList(TestType.S, selfIdList.S)}
          colorAnswerIdList={colorIdList.S}
          selfTestIdList={selfIdList.S}
        />
        <KeywordCard
          title="결정 방식"
          subtitle={
            type === 'self'
              ? (KEYWORD_CARD_INFO[peerCardList[3]].content as string)
              : (PeerKeywordList[3] as string)
          }
          testType="C"
          keywords={getKeywordsByIdList(TestType.C, selfIdList.C)}
          colorAnswerIdList={colorIdList.C}
          selfTestIdList={selfIdList.C}
        />
      </section>
    </Fragment>
  );
}
