import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import FixedCenter from '@components/wrapper/FixedCenter';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

// TODO username 전체 변경 필요함.
export default function RequestInit() {
  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '2' });
  return (
    <Fragment>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: 'username 님이\n 피어 테스트 응답을 요청했어요',
          subtitle:
            '테스트에 응답해주신다면\n username 님이 매우 고마워할 거에요!',
        }}
      />
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="NotepadPerson" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <FixedButtonContainer direction="col">
        <Typography
          variant="body02"
          fontColor="gray04"
          className="text-center mb-3"
        >
          함께 프로젝트를 한 경험이 있다면?
        </Typography>
        <Button onClick={handleClick}>피어 테스트 응답하기</Button>
      </FixedButtonContainer>
    </Fragment>
  );
}
