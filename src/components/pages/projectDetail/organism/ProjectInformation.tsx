import Typography from '@components/common/atom/Typography';
import { Code } from '@nextui-org/react';
import { Fragment } from 'react';

// TODO api 연동 후 각 컴포넌트 molecule로 쪼개서 props 넘기기
export default function ProjectInformation() {
  return (
    <Fragment>
      <div className="w-full flex flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            프로젝트 소개
          </Typography>
          <Typography variant="body02" fontColor="gray06">
            설명글입니다. 설명글 입니다. 설명글 입니다. 설명글입니다. 설명글
            입니다. 설명글 입니다. 설명글입니다. 설명글 입니다. 설명글.
            설명글입니다. 설명글 입니다. 설명글. 설명글입니다. 설명글 입니다.
            설명글 입니다. 설명글입니다. 설명글 입니다. 설명글 입니다.
            설명글입니다. 설명글 입니다. 설명글. 설명글입니다. 설명글 입니다.
            설명글입니다. 설명글 입니다. 설명글 입니다.
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            프로젝트 기간
          </Typography>
          <Typography variant="body02" fontColor="gray06">
            2023.12.20 ~ 2023.12.31
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            소개 링크
          </Typography>
          <div className="flex flex-col gap-2">
            <Code>
              <Typography variant="body02" fontColor="gray06">
                https://kakao.com
              </Typography>
            </Code>
            <Code>
              <Typography variant="body02" fontColor="gray06">
                https://kakao.com
              </Typography>
            </Code>
            <Code>
              <Typography variant="body02" fontColor="gray06">
                https://kakao.com
              </Typography>
            </Code>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
