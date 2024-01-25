import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import Typography from '@components/common/atom/Typography';
import Badge from '@components/common/atom/Badge';
import TestCardList from './TestCardList';

export default function NoPeerTestResult() {
  return (
    <>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-2">
          <Typography variant="header03" fontColor="gray08">
            동료들이 생각하는 내 모습
          </Typography>
          <Badge type="primary">피어 테스트</Badge>
        </div>
      </HeaderContainer>
      <TestCardList type="locked" className="mb-12" />
    </>
  );
}
