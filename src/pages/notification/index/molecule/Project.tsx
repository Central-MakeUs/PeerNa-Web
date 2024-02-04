import { useFlow } from '@hooks/common/useStackFlow';
import { ProjectBase } from '@pages/notification/index/molecule/ProjectType';
import { Fragment } from 'react';

interface ProjectProps {
  project: ProjectBase | null;
}

export default function Project({ project }: ProjectProps) {
  const { push } = useFlow();
  if (!project) return null;
  return <Fragment>{project.display(push)}</Fragment>;
}
