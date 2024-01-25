import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import Project from '@components/common/molecule/Project';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { Spacer, Tab } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';

const ProjectPage: ActivityComponentType = () => {
  return (
    <AppScreenContainer>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '프로젝트',
        }}
      />
      <UnderlineTabs>
        <Tab className="w-full" title="최신순">
          <Spacer y={5} />
          <Typography
            variant="caption01"
            fontColor="gray04"
            className="text-left"
          >
            최신순
          </Typography>
          <Spacer y={3} />
          <div className="flex flex-col gap-3">
            <Project
              title="프로젝트 제목"
              subtitle="설명글입니다."
              date="2023.12.20 ~ 2023.12.31"
            />
            <Project
              title="프로젝트 제목"
              subtitle="설명글입니다."
              date="2023.12.20 ~ 2023.12.31"
            />
            <Project
              title="프로젝트 제목"
              subtitle="설명글입니다."
              date="2023.12.20 ~ 2023.12.31"
            />
          </div>
        </Tab>
        <Tab title="내 프로젝트">내 프로젝트</Tab>
      </UnderlineTabs>
      <BottomNavigation />
    </AppScreenContainer>
  );
};

export default ProjectPage;
