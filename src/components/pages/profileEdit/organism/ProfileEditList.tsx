import Dropdown from '@components/common/atom/Dropdown';
import TextArea from '@components/common/atom/TextArea';
import HeaderContainer from '@components/pages/profileEdit/molecule/HeaderContainer';
import Typography from '@components/common/atom/Typography';
import { ProfileInfo } from '@hooks/query/useProfileInfo';
import { ProfileSelfStateType } from '@store/profileSelfState';

interface ProfileEditProps {
  profileSelf: ProfileSelfStateType;
  myProfileInfo: ProfileInfo;
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
  console.log(profileSelf.oneLiner);
  return (
    <ul>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">직업</Typography>
        </HeaderContainer>
        <Dropdown value={profileSelf.job} onClick={handleClickJob}></Dropdown>
      </li>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">직무</Typography>
        </HeaderContainer>
        <Dropdown value={profileSelf.part} onClick={handleClickPart}></Dropdown>
      </li>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">한 줄 소개</Typography>
        </HeaderContainer>
        <TextArea
          text={profileSelf.oneLiner}
          handleChangeText={handleChangeOneLiner}
        ></TextArea>
      </li>
    </ul>
  );
}
