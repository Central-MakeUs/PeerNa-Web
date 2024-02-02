import Badge from '@components/common/atom/Badge';
import Typography from '@components/common/atom/Typography';
import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import TestCardList from '@components/pages/mypage/molecule/TestCardList';
import { Fragment } from 'react';

interface PeerResultProps {
  user: string;
  peerCardList: string[];
}

export default function PeerTestResult({
  user,
  peerCardList,
}: PeerResultProps) {
  return (
    <Fragment>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-2">
          <Typography variant="header03" fontColor="gray08">
            {user}
          </Typography>
          <Badge type="primary">동료</Badge>
        </div>
      </HeaderContainer>
      <TestCardList
        peerCardList={peerCardList}
        type={peerCardList ? 'peer' : 'locked'}
      />
    </Fragment>
  );
}
