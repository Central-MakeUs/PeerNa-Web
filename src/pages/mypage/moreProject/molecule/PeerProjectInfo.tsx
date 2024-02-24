import Typography from '@components/common/atom/Typography';
import { Code } from '@nextui-org/react';
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
      <div className="w-full flex flex-col items-start gap-10 px-4">
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            프로젝트 소개
          </Typography>
          <Typography variant="body02" fontColor="gray06">
            {introduce}
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            프로젝트 기간
          </Typography>
          <Typography variant="body02" fontColor="gray06">
            {`${startDate} ~ ${endDate}`}
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            소개 링크
          </Typography>
          <div className="flex flex-col gap-2">
            {openChattingLink !== null ? (
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  // as="a"
                  // href={openChattingLink}
                >
                  {openChattingLink}
                </Typography>
              </Code>
            ) : null}
            {notionLink !== null ? (
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  // as="a"
                  // href={notionLink}
                >
                  {notionLink}
                </Typography>
              </Code>
            ) : null}
            {githubLink !== null ? (
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  // as="a"
                  // href={githubLink}
                >
                  {githubLink}
                </Typography>
              </Code>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
