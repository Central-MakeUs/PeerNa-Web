import Header from '@components/common/organism/Header';
import { useSetRecoilState } from 'recoil';
import { bottomSheetState } from '@store/bottomSheet';
import ProfileEditList from '@components/pages/profileEdit/organism/ProfileEditList';

export default function ProfileEditPage() {
  const setOpen = useSetRecoilState(bottomSheetState);
  setOpen(() => ({
    isOpen: false,
    type: 'job',
    contents: [
      { title: '직업', onClick: undefined },
      { title: '대학생', onClick: undefined },
      { title: '취준생', onClick: undefined },
      { title: '직장인', onClick: undefined },
      { title: '창업가', onClick: undefined },
      { title: '프리랜서', onClick: undefined },
      { title: '기타', onClick: undefined },
    ],
  }));

  const values = '직장인';

  return (
    <div className="w-[390px] mx-auto">
      <Header
        showBackButton={true}
        showSearchButton={false}
        showAddButton={false}
        centerAlign={true}
        title="프로필 수정"
        mainText={''}
      />
      <main>
        <ProfileEditList values={values} />
      </main>
    </div>
  );
}
