import { queryClient } from '@/main';
import Button from '@components/common/atom/Button';
import DatePicker from '@components/common/atom/DatePicker';
import TextArea from '@components/common/atom/TextArea';
import TextInput from '@components/common/atom/TextInput';
import Typography from '@components/common/atom/Typography';
import { QUERY_KEY } from '@constants/queryKey';
import usePostCreateProject from '@hooks/api/project/index/usePostCreateProject';
import { useFlow } from '@hooks/common/useStackFlow';
import { Divider, cn } from '@nextui-org/react';
import { isValidDateRange } from '@utils/date';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';

export default function ProjectForm() {
  const { push } = useFlow();

  const [projectName, setProjectName] = useState('');
  const handleChangeProjectName = (newProjectName: string) =>
    setProjectName(newProjectName);

  const [introduce, setIntroduce] = useState('');
  const handleChangeIntroduce = (newIntroduce: string) =>
    setIntroduce(newIntroduce);

  const validIntroduce = introduce.length < 200;

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const handleChangeStartDate = (newDate: Date | undefined) =>
    setStartDate((newDate ?? new Date()).toISOString());
  const handleChangeEndDate = (newDate: Date | undefined) =>
    setEndDate((newDate ?? new Date()).toISOString());

  const [openChattingLink, setOpenChattingLink] = useState('');
  const handleChangeOpenChattingLink = (newLink: string) =>
    setOpenChattingLink(newLink);
  const [notionLink, setNotionLink] = useState('');
  const handleChangeNotionLink = (newLink: string) => setNotionLink(newLink);
  const [githubLink, setGithubLink] = useState('');
  const handleChangeGithubLink = (newLink: string) => setGithubLink(newLink);

  const isValidForm = () => {
    return (
      projectName !== '' &&
      introduce !== '' &&
      startDate !== '' &&
      endDate !== '' &&
      openChattingLink !== ''
    );
  };

  const { mutate } = usePostCreateProject();
  const handleSubmit = () => {
    if (!isValidDateRange(startDate, endDate)) {
      toast.error('시작일은 종료일보다 큰 값일 수 없습니다');
    } else {
      mutate(
        {
          projectName: projectName,
          introduce: introduce,
          openChattingLink: openChattingLink,
          notionLink: notionLink,
          githubLink: githubLink,
          startDate: startDate,
          endDate: endDate,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MY_PROJECT] });
            push('ProjectPage', {});
          },
        },
      );
    }
  };

  return (
    <Fragment>
      <form className="w-full flex flex-col gap-8 mb-10 px-4">
        <div className="flex flex-col items-start gap-3">
          <Typography variant="header03">프로젝트 제목</Typography>
          <TextInput
            text={projectName}
            handleChangeText={handleChangeProjectName}
            placeholder="프로젝트 제목을 작성해주세요."
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Typography variant="header03">프로젝트 소개</Typography>
          <TextArea
            text={introduce}
            handleChangeText={handleChangeIntroduce}
            placeholder="프로젝트와 관련한 소개글을 자세히 작성해주세요. &#13;&#10; (ex. 프로젝트 배경, 목적, 회의 방식, 회의 시간대 등)"
          />
          <Typography
            variant="body02"
            className={cn(
              validIntroduce ? 'text-gray06' : 'text-danger01',
              'w-full text-right',
            )}
          >
            {`${introduce.length}/200`}
          </Typography>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Typography variant="header03">프로젝트 기간</Typography>
          <div className="w-full flex items-center gap-2">
            <DatePicker
              date={startDate === '' ? undefined : new Date(startDate)}
              handleDate={handleChangeStartDate}
              placeholder="시작일"
            />
            <Divider className="w-[10px]" />
            <DatePicker
              date={endDate === '' ? undefined : new Date(endDate)}
              handleDate={handleChangeEndDate}
              placeholder="종료일"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Typography variant="header03">링크1</Typography>
          <TextInput
            text={openChattingLink}
            handleChangeText={handleChangeOpenChattingLink}
            placeholder="(필수) 연락 수단을 알려주세요. (ex. 오픈채팅 링크)"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Typography variant="header03">링크 2</Typography>
          <TextInput
            text={notionLink}
            handleChangeText={handleChangeNotionLink}
            placeholder="(선택) 외부 링크 (ex. 서비스 소개 페이지 링크)"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Typography variant="header03">링크 3</Typography>
          <TextInput
            text={githubLink}
            handleChangeText={handleChangeGithubLink}
            placeholder="(선택) 외부 링크 (ex. 포트폴리오 링크)"
          />
        </div>
      </form>
      <div className="px-4 my-4">
        <Button onClick={handleSubmit} isDisabled={!isValidForm()}>
          생성하기
        </Button>
      </div>
    </Fragment>
  );
}
