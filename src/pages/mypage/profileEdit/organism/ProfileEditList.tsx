import Dropdown from '@components/common/atom/Dropdown';
import TextArea from '@components/common/atom/TextArea';
import Typography from '@components/common/atom/Typography';
import { JOB_LIST, PART_LIST } from '@constants/list';
import { MemberMeResponseDTO } from '@hooks/api/member/index/useGetMe';
import HeaderContainer from '@pages/mypage/profileEdit/molecule/HeaderContainer';
import { ProfileSelfStateType } from '@store/profileSelfState';
interface ProfileEditProps {
  profileSelf: ProfileSelfStateType;
  myProfileInfo: MemberMeResponseDTO;
  handleClickJob: () => void;
  handleClickPart: () => void;
  handleChangeOneLiner: (newLiner: string) => void;
}

export default function ProfileEditList({
  profileSelf,
  handleClickPart,
  handleClickJob,
  handleChangeOneLiner,
}: ProfileEditProps) {
  const validFeedback = profileSelf.oneLiner.length < 20;

  const jobText = JOB_LIST.find(job => job.key === profileSelf.job)
    ?.text as string;
  const partText = PART_LIST.find(part => part.key === profileSelf.part)
    ?.text as string;
  console.log(jobText);
  console.log(partText);

  return (
    <ul>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">직업</Typography>
        </HeaderContainer>
        <Dropdown value={jobText} handleClick={handleClickJob}></Dropdown>
      </li>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">직무</Typography>
        </HeaderContainer>
        <Dropdown value={partText} handleClick={handleClickPart}></Dropdown>
      </li>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">한 줄 소개</Typography>
        </HeaderContainer>
        <TextArea
          text={profileSelf.oneLiner}
          handleChangeText={handleChangeOneLiner}
        ></TextArea>
        <div className="flex justify-end">
          <Typography
            variant="body02"
            className={validFeedback ? 'text-gray06' : 'text-danger01'}
          >
            {`${profileSelf.oneLiner.length}/20`}
          </Typography>
        </div>
      </li>
    </ul>
  );
}
