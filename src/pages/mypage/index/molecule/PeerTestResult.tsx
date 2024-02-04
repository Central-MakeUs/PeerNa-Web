import Badge from '@components/common/atom/Badge';
import Typography from '@components/common/atom/Typography';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import { ResultKeyword } from "@type/enums";
import TestCardList from './TestCardList';

export default function PeerTestResult({
  peerCardList,
}: {
  peerCardList: ResultKeyword[];
}) {
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
      <TestCardList peerCardList={peerCardList} type="peer" className="mb-12" />
    </>
  );
}
