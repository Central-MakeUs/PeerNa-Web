import { ProjectBase } from '@components/pages/notification/molecule/ProjectType';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

interface ProjectProps {
  project: ProjectBase | null;
}

export default function Project({ project }: ProjectProps) {
  const { push } = useFlow();
  if (!project) return null;
  return <Fragment>{project.display(push)}</Fragment>;
}
