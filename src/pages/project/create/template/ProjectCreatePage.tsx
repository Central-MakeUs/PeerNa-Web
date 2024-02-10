import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import Header from '@components/wrapper/Header';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import ProjectForm from '@pages/project/create/organism/ProjectForm';
import { ActivityComponentType } from '@stackflow/react';

const ProjectCreatePage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const handleClickBackIcon = () => pop();
  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleClickBackIcon} />
          <Header.Title className="mx-auto">프로젝트 생성</Header.Title>
        </Header.TopBar>
      </Header>
      <Content>
        <Spacer y={12} />
        <ProjectForm />
        <Spacer y={12} />
      </Content>
    </AppScreenContainer>
  );
};

export default ProjectCreatePage;
