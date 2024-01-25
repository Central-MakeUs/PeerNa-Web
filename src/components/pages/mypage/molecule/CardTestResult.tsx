import Typography from '@components/common/atom/Typography';
import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import { TestCardImage } from '@constants/image';

export default function CardTestResult() {
  return (
    <>
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
      <img
        src={TestCardImage.RESULT}
        alt="테스트 결과 카드"
        className="mt-4 mb-8 mx-auto !w-[171px]"
      />
    </>
  );
}