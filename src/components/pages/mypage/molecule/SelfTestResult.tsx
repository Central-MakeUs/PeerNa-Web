import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import Typography from '@components/common/atom/Typography';
import Badge from '@components/common/atom/Badge';
import TestCardList from './TestCardList';
import { CardType } from '@constants/image';

export default function SelfTestResult({
  selfTestCardList,
}: {
  selfTestCardList: CardType[];
}) {
  return (
    <>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-2">
          <Typography variant="header03" fontColor="gray08">
            내가 생각하는 내 모습
          </Typography>
          <Badge type="default">셀프 테스트</Badge>
        </div>
      </HeaderContainer>
      <TestCardList selfTestCardList={selfTestCardList} type="self" />
    </>
  );
}
