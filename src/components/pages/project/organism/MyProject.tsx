import Typography from '@components/common/atom/Typography';
import AlarmListItem from '@components/common/molecule/AlarmListItem';
import EmptyProject from '@components/pages/project/molecule/EmptyProject';
import { useFlow } from '@hooks/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { Fragment } from 'react';

export default function MyProject() {
  const { push } = useFlow();

  const handlePushCreateProjectPage = () => push('ProjectCreatePage', {});

  return (
    <Fragment>
      <div className="w-full" onClick={handlePushCreateProjectPage}>
        <AlarmListItem
          title="내 프로젝트를 만들어보세요"
          subtitle="원하는 동료들과 함께해요"
        />
      </div>
      <Spacer y={5} />
      <Typography variant="caption01" fontColor="gray04" className="text-left">
        최신순
      </Typography>
      <Spacer y={3} />
      <div className="h-full flex flex-col gap-3">
        {/* {Array(10)
          .fill({})
          .map((_, i) => (
            <Project
              key={i}
              title="프로젝트 제목"
              subtitle="설명글입니다."
              date="2023.12.20 ~ 2023.12.31"
            />
          ))} */}
        {true && <EmptyProject />}
      </div>
    </Fragment>
  );
}
