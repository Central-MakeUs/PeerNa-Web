import Dropdown from '@components/common/atom/Dropdown';
import TextArea from '@components/common/atom/TextArea';
import Typography from '@components/common/atom/Typography';
import { JOB_MAPPER, PART_MAPPER } from "@constants/mapper";
import HeaderContainer from '@pages/mypage/profileEdit/molecule/HeaderContainer';
import { ProfileSelfStateType } from '@store/profileSelfState';
import { JobType, PartType } from "@type/enums";
import { ProfileCardInfo } from "@type/index";
interface ProfileEditProps {
  profileSelf: ProfileSelfStateType;
  myProfileInfo: ProfileCardInfo;
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

  return (
    <ul>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">직업</Typography>
        </HeaderContainer>
        <Dropdown
          value={JOB_MAPPER[profileSelf.job as JobType]}
          handleClick={handleClickJob}
        ></Dropdown>
      </li>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">직무</Typography>
        </HeaderContainer>
        <Dropdown
          value={PART_MAPPER[profileSelf.part as PartType]}
          handleClick={handleClickPart}
        ></Dropdown>
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
