import Typography from '@components/common/atom/Typography';
import Talk from '@components/common/atom/Talk';
import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import { PeerProjectInfoDTO } from '@hooks/api/useGetPeerProjectInfo';
import { Fragment } from 'react';

export default function PeerProjectInfo({
  projectInfo,
}: {
  projectInfo: PeerProjectInfoDTO;
}) {
  return (
    <Fragment>
      <Typography
        variant="header01"
        fontColor="gray08"
        className="pl-5 pt-[2px]"
      >
        {projectInfo.projectName}
      </Typography>
      <HeaderContainer size="sm">
        <Typography variant="header03" className="mb-3">
          프로젝트 소개
        </Typography>
        <Typography variant="body01" fontColor="gray06">
          {projectInfo.introduce}
        </Typography>
      </HeaderContainer>
      <HeaderContainer size="sm">
        <Typography variant="header03" className="mb-3">
          프로젝트 기간
        </Typography>
        <Typography variant="body01" fontColor="gray06">
          {`${projectInfo.startDate} ~ ${projectInfo.endDate}`}
        </Typography>
      </HeaderContainer>
      <HeaderContainer size="sm">
        <Typography variant="header03" className="mb-3">
          소개 링크
        </Typography>
        <ul className="flex flex-col gap-2">
          <li>
            <Talk type="filled">{projectInfo.openChattingLink}</Talk>
          </li>
          <li>
            <Talk type="filled">{projectInfo.notionLink}</Talk>
          </li>
          <li>
            <Talk type="filled">{projectInfo.githubLink}</Talk>
          </li>
        </ul>
      </HeaderContainer>
    </Fragment>
  );
}
