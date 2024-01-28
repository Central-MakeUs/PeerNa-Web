import IconButton from '@components/common/atom/IconButton';
import UserProfileList from '@components/pages/home/molecule/UserProfileList';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { useFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';
import PeerItem from '../atom/PeerItem';

const PeerTypeSPage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const data = {
    code: 0,
    message: 'string',
    result: [
      {
        name: '윤하정',
        testType: 'D',
        part: 'BE 개발자',
        job: '직장인',
        totalScore: 55,
        oneLiner: '한 줄 소개',
      },
      {
        name: '최혜선',
        testType: 'I',
        part: '디자이너',
        job: '직장인',
        totalScore: 55,
        oneLiner: '한 줄 소개',
      },
      {
        name: '이관희',
        testType: 'S',
        part: '마케터',
        job: '직장인',
        totalScore: 55,
        oneLiner: '한 줄 소개',
      },
      {
        name: '윤하빈',
        testType: 'C',
        part: 'PM',
        job: '직장인',
        totalScore: 55,
        oneLiner: '한 줄 소개',
      },
    ],
  };
  const handleBack = () => pop();
  return (
    <AppScreenContainer>
      <header className="w-full flex items-start pt-[22px] pb-[24px] bg-primary200">
        <IconButton
          iconProps={{
            id: 'ArrowLeft',
            color: 'gray07',
            width: 10.5,
            height: 20,
          }}
          onClick={handleBack}
          className="ml-[20px]"
        />
        <PeerItem type="S" />
      </header>
      <UserProfileList data={data.result} />
    </AppScreenContainer>
  );
};

export default PeerTypeSPage;
