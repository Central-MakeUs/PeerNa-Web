import NavigationHeader from '@components/common/molecule/NavigationHeader';
import ProjectForm from '@components/pages/projectCreate/organism/ProjectForm';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { useFlow } from '@hooks/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';

const ProjectCreatePage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const handleClickBackIcon = () => pop();
  return (
    <AppScreenContainer>
      <NavigationHeader
        backIconProps={{
          isShow: true,
          handleClick: handleClickBackIcon,
        }}
        headProps={{
          isShow: true,
          title: '프로젝트 생성',
        }}
      />
      <Spacer y={12} />
      <ProjectForm />
    </AppScreenContainer>
  );
};

export default ProjectCreatePage;
