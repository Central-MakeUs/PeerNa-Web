import Dropdown from '@components/common/atom/Dropdown';
import TextArea from '@components/common/atom/TextArea';
import HeaderContainer from '@components/pages/profileEdit/molecule/HeaderContainer';
import Typography from '@components/common/atom/Typography';

const handleSelect = () => {
  console.log('클릭');
};

export default function ProfileEditList({ values }: { values: string }) {
  return (
    <ul>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">직업</Typography>
        </HeaderContainer>
        <Dropdown values={values}></Dropdown>
      </li>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">직업</Typography>
        </HeaderContainer>
        <Dropdown values={values}></Dropdown>
      </li>
      <li className="px-5">
        <HeaderContainer>
          <Typography variant="header03">한 줄 소개</Typography>
        </HeaderContainer>
        <TextArea text="한줄소개" handleChangeText={handleSelect}></TextArea>
      </li>
    </ul>
  );
}
