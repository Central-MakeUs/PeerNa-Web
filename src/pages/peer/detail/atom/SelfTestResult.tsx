import Badge from '@components/common/atom/Badge';
import Typography from '@components/common/atom/Typography';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import TestCardList from '@pages/mypage/index/molecule/TestCardList';
import { ResultKeyword } from '@type/enums';
import { Fragment } from 'react';

interface SelfResultProps {
  myName: string;
  myCardList: ResultKeyword[];
}

export default function SelfTestResult({
  myName,
  myCardList,
}: SelfResultProps) {
  return (
    <Fragment>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-2">
          <Typography variant="header03" fontColor="gray08">
            {myName}
          </Typography>
          <Badge type="default">나</Badge>
        </div>
      </HeaderContainer>
      <TestCardList
        selfTestCardList={myCardList}
        type={myCardList.length > 0 ? 'self' : 'locked'}
      />
    </Fragment>
  );
}
