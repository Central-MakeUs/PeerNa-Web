import { PeerProjectList } from '@/hooks/api/home/peerId/useGetPeerDetail';
import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';
import Project from '@components/common/molecule/Project';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import { Fragment } from 'react';

interface ProjectListProps {
  peerProjectDtoList: PeerProjectList[];
  handleClick: () => void;
}

export default function ProjectList({
  peerProjectDtoList,
  handleClick,
}: ProjectListProps) {
  return (
    <Fragment>
      <HeaderContainer size="md" arrow={true}>
        <Typography variant="header03" fontColor="gray08">
          참여 프로젝트
        </Typography>
        <IconButton
          iconProps={{
            id: 'ArrowRight',
            color: 'gray07',
            width: 10.5,
            height: 20,
          }}
          onClick={handleClick}
        />
      </HeaderContainer>
      <ul className="flex flex-col gap-3 mb-6">
        {peerProjectDtoList.map((project, index) => (
          <li key={index}>
            <Project
              title={project.projectName}
              subtitle={project.introduce}
              date={`${project.startDate} ~ ${project.endDate}`}
            />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
