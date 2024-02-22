import Typography from '@components/common/atom/Typography';
import { Code } from '@nextui-org/react';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import { ProjectInformationType } from '@type';
import { Fragment } from 'react';

export default function PeerProjectInfo({
  projectInfo,
}: {
  projectInfo: ProjectInformationType;
}) {
  const {
    introduce,
    startDate,
    endDate,
    openChattingLink,
    notionLink,
    githubLink,
  } = projectInfo;
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
        <Typography variant="header03" fontColor="gray07" className="mb-3">
          프로젝트 소개
        </Typography>
        <Typography variant="body01" fontColor="gray06">
          {introduce}
        </Typography>
      </HeaderContainer>
      <HeaderContainer size="sm">
        <Typography variant="header03" fontColor="gray07" className="mb-3">
          프로젝트 기간
        </Typography>
        <Typography variant="body01" fontColor="gray06">
          {`${startDate} ~ ${endDate}`}
        </Typography>
      </HeaderContainer>
      <HeaderContainer size="sm">
        <Typography variant="header03" fontColor="gray07" className="mb-3">
          소개 링크
        </Typography>
        <ul className="flex flex-col gap-2">
          {openChattingLink && (
            <li>
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  as="a"
                  href={openChattingLink}
                >
                  {openChattingLink}
                </Typography>
              </Code>
            </li>
          )}
          {notionLink && (
            <li>
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  as="a"
                  href={notionLink}
                >
                  {notionLink}
                </Typography>
              </Code>
            </li>
          )}
          {githubLink && (
            <li>
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  as="a"
                  href={githubLink}
                >
                  {githubLink}
                </Typography>
              </Code>
            </li>
          )}
        </ul>
      </HeaderContainer>
    </Fragment>
  );
}
