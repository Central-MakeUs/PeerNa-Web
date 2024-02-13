import Typography from '@components/common/atom/Typography';
import ProgressTrack from '@pages/mypage/index/atom/ProgressTrack';
import TotalScoreToolTip from '@pages/mypage/index/atom/TotalScoreToolTip';
import HeaderContainer from './HeaderContainer';

export default function OverallScore({ totalScore }: { totalScore: number }) {
  return (
    <div className="bg-gray01 mt-[36px]">
      <HeaderContainer size="md">
        <Typography variant="header02" fontColor="gray08" className="mb-2">
          종합점수
        </Typography>
        <Typography variant="body03" fontColor="gray04">
          {
            '종합 점수는 동료들이 피어 테스트에서 응답한\n 평가와 활동 횟수를 종합하여 만든 지표예요.'
          }
        </Typography>
        <div className="py-16 flex justify-center">
          <TotalScoreToolTip totalScore={totalScore}>
            <ProgressTrack totalScore={totalScore} />
          </TotalScoreToolTip>
        </div>
      </HeaderContainer>
    </div>
  );
}
