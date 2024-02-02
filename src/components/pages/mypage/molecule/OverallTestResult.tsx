import SvgIcon from '@components/common/atom/SvgIcon';
import Tooltip from '@components/common/atom/Tooltip';
import Typography from '@components/common/atom/Typography';
import KeywordCard from '@components/common/molecule/KeywordCard';
import { TestKeywordData, TestKeywordType } from '@constants/keyword';
import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import { CardType, TestResultCardDescription } from '@constants/image';
import { Button } from '@nextui-org/react';
import { Fragment } from 'react';

interface OverallTestResultProps {
  colorAnswerIdList: number[];
  selfTestAnswerIdList: number[];
  peerCardList: CardType[];
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

  const getKeywordsByIdList = (type: TestKeywordType, ids: number[]) => {
    return ids.map(id => TestKeywordData[type].keywords[id - 1]);
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
          subtitle={TestResultCardDescription[peerCardList[0]]}
          type="D"
          keywords={getKeywordsByIdList('D', selfIdList.D)}
          colorAnswerIdList={colorIdList.D}
          selfTestIdList={selfIdList.D}
        />
        <KeywordCard
          title="소통 방식"
          subtitle={TestResultCardDescription[peerCardList[1]]}
          type="I"
          keywords={getKeywordsByIdList('I', selfIdList.I)}
          colorAnswerIdList={colorIdList.I}
          selfTestIdList={selfIdList.I}
        />
        <KeywordCard
          title="사고 방식"
          subtitle={TestResultCardDescription[peerCardList[2]]}
          type="S"
          keywords={getKeywordsByIdList('S', selfIdList.S)}
          colorAnswerIdList={colorIdList.S}
          selfTestIdList={selfIdList.S}
        />
        <KeywordCard
          title="결정 방식"
          subtitle={TestResultCardDescription[peerCardList[3]]}
          type="C"
          keywords={getKeywordsByIdList('C', selfIdList.C)}
          colorAnswerIdList={colorIdList.C}
          selfTestIdList={selfIdList.C}
        />
      </section>
    </Fragment>
  );
}
