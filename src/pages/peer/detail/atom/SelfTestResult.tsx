import Badge from '@components/common/atom/Badge';
import Typography from '@components/common/atom/Typography';
import { ResultKeyword } from "@type/enums";
import HeaderContainer from 'pages/mypage/index/molecule/HeaderContainer';
import TestCardList from 'pages/mypage/index/molecule/TestCardList';
import { Fragment } from 'react';

interface SelfResultProps {
  myCardList: ResultKeyword[];
}

export default function SelfTestResult({ myCardList }: SelfResultProps) {
  return (
    <Fragment>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-2">
          <Typography variant="header03" fontColor="gray08">
            {`나`}
          </Typography>
          <Badge type="default">나</Badge>
        </div>
      </HeaderContainer>
      <TestCardList
        selfTestCardList={myCardList}
        type={myCardList ? 'self' : 'locked'}
      />
    </Fragment>
  );
}
