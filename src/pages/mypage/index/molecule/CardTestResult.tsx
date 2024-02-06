import Typography from '@components/common/atom/Typography';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import FlipCard from '@pages/review/result/molecule/FlipCard';
import { TestType } from '@type/enums';
import { Fragment } from 'react';

interface CardTypeProps {
  peerTestType: TestType;
  selfTestType: TestType;
}
export default function CardTestResult({
  peerTestType,
  selfTestType,
}: CardTypeProps) {
  return (
    <Fragment>
      <HeaderContainer size={'md'}>
        <Typography variant="header02" fontColor="gray08" className="mb-2">
          {
            'N명의 동료들이 남긴 피어 테스트 결과와 \n 셀프 테스트 결과를 종합했어요'
          }
        </Typography>
        <Typography variant="body01" fontColor="gray06">
          응답에 따라 분석 결과는 변경될 수 있어요.
        </Typography>
      </HeaderContainer>
      <div className="h-[238px] mb-8">
        <FlipCard peerTestType={peerTestType} selfTestType={selfTestType} />
      </div>
    </Fragment>
  );
}
