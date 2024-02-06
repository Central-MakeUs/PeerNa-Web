import SvgIcon from '@components/common/atom/SvgIcon';
import Tooltip from '@components/common/atom/Tooltip';
import Typography from '@components/common/atom/Typography';
import KeywordCard from '@components/common/molecule/KeywordCard';
import { KEYWORD_CARD_INFO } from '@constants/list';
import { KEYWORD_MAPPER } from '@constants/mapper';
import { Button } from '@nextui-org/react';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
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

  const selfIdList = separateIdsByType(selfTestAnswerIdList);
  const colorIdList = separateIdsByType(colorAnswerIdList);

  const getKeywordsByIdList = (type: TestType, ids: number[]) => {
    return ids.map(id => KEYWORD_MAPPER[type].keywords[id - 1]);
  };

  const title =
    type === 'self' ? '나도 알고 동료도 아는 내 모습' : '나와 동료의 공통점';

  const toolTip =
    type === 'self' ? (
      <>
        셀프 테스트, 피어 테스트 문항의
        <br />
        일치하는 선택지를 확인하세요
      </>
    ) : (
      <>
        나와 동료의 협업 유형 분석 결과
        <br />
        일치하는 선택지를 확인하세요
      </>
    );

  return (
    <Fragment>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-[6px]">
          <Typography variant="header03" fontColor="gray08">
            {title}
          </Typography>
          <Tooltip content={toolTip}>
            <Button className="bg-transparent !min-w-unit-0 !px-unit-0">
              <SvgIcon id="Help" color="gray04" width={16} height={16} />
            </Button>
          </Tooltip>
        </div>
      </HeaderContainer>
      <section className="flex flex-col gap-3 items-center">
        <KeywordCard
          title="가치관"
          subtitle={KEYWORD_CARD_INFO[peerCardList[0]].content as string}
          type="D"
          keywords={getKeywordsByIdList(TestType.D, selfIdList.D)}
          colorAnswerIdList={colorIdList.D}
          selfTestIdList={selfIdList.D}
        />
        <KeywordCard
          title="소통 방식"
          subtitle={KEYWORD_CARD_INFO[peerCardList[1]].content as string}
          type="I"
          keywords={getKeywordsByIdList(TestType.I, selfIdList.I)}
          colorAnswerIdList={colorIdList.I}
          selfTestIdList={selfIdList.I}
        />
        <KeywordCard
          title="사고 방식"
          subtitle={KEYWORD_CARD_INFO[peerCardList[2]].content as string}
          type="S"
          keywords={getKeywordsByIdList(TestType.S, selfIdList.S)}
          colorAnswerIdList={colorIdList.S}
          selfTestIdList={selfIdList.S}
        />
        <KeywordCard
          title="결정 방식"
          subtitle={KEYWORD_CARD_INFO[peerCardList[3]].content as string}
          type="C"
          keywords={getKeywordsByIdList(TestType.C, selfIdList.C)}
          colorAnswerIdList={colorIdList.C}
          selfTestIdList={selfIdList.C}
        />
      </section>
    </Fragment>
  );
}
