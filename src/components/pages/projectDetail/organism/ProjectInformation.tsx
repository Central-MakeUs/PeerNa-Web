import GithubIcon from '@assets/link/github.png';
import KakaoIcon from '@assets/link/kakao.png';
import NotionIcon from '@assets/link/notion.png';
import Typography from '@components/common/atom/Typography';
import ProjectCreatorProfile from '@components/pages/projectDetail/molecule/ProjectCreatorProfile';
import { JobType, PartType } from '@constants/review';
import { Code } from '@nextui-org/react';
import { ReviewResultType } from '@type/index';
import { Fragment } from 'react';

interface ProjectInformationProps {
  introduce: string;
  startDate: string;
  endDate: string;
  openChattingLink: string;
  notionLink: string;
  githubLink: string;
  creatorSimpleProfileDto: {
    memberId: number;
    name: string;
    job: JobType;
    part: PartType;
    peerTestType: ReviewResultType;
    oneLiner: string;
    totalScore: number;
  };
}

export default function ProjectInformation({
  introduce,
  startDate,
  endDate,
  openChattingLink,
  notionLink,
  githubLink,
  creatorSimpleProfileDto,
}: ProjectInformationProps) {
  return (
    <Fragment>
      <div className="w-full flex flex-col items-start gap-10">
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
            <Code className="flex gap-2 items-center px-4 py-2">
              <img src={KakaoIcon} width={20} height={20} />
              <Typography variant="body02" fontColor="gray06">
                {openChattingLink}
              </Typography>
            </Code>
            <Code className="flex gap-2 items-center px-4 py-2">
              <img src={NotionIcon} width={20} height={20} />
              <Typography variant="body02" fontColor="gray06">
                {notionLink}
              </Typography>
            </Code>
            <Code className="flex gap-2 items-center px-4 py-2">
              <img src={GithubIcon} width={20} height={20} />
              <Typography variant="body02" fontColor="gray06">
                {githubLink}
              </Typography>
            </Code>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            프로젝트 생성자
          </Typography>
          <ProjectCreatorProfile {...creatorSimpleProfileDto} />
        </div>
      </div>
    </Fragment>
  );
}
