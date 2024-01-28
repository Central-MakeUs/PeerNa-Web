import { ProjectBase } from '@components/pages/notification/molecule/ProjectType';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

interface ProjectProps {
  project: ProjectBase;
}

export default function Project({ project }: ProjectProps) {
  const { push } = useFlow();
  return <Fragment>{project.display(push)}</Fragment>;
}
