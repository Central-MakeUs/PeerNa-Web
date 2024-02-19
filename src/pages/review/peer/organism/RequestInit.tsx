import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetUserName from '@hooks/api/member/index/useGetUserName';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewState from '@hooks/store/useReviewState';
import { Fragment, useEffect } from 'react';

interface RequestInitProps {
  uuid?: string;
  memberId?: string;
}

// TODO username 전체 변경 필요함.
export default function RequestInit({ uuid, memberId }: RequestInitProps) {
  const { handleChangeUuid, handleChangeTargetId, handleChangePeerName } =
    useReviewState();
  const { data } = useGetUserName(uuid, memberId);
  console.log(data);
  const username = data.name;

  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '2' });

  useEffect(() => {
    if (username) {
      handleChangeUuid(uuid!);
      handleChangeTargetId(memberId!);

      handleChangePeerName(username);
    }
  }, []);

  return (
    <Fragment>
      <Header>
        <Header.TopBar />
        <Header.Body className="gap-4">
          <Header.Title>
            {`${username} 님이\n 피어 테스트 응답을 요청했어요`}
          </Header.Title>
          <Header.Subtitle>
            {`테스트에 응답해주신다면\n ${username} 님이 매우 고마워할 거에요!`}
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="NotepadPerson" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <Footer bottom={5} className="px-4">
        <Typography
          variant="body02"
          fontColor="gray04"
          className="text-center mb-3"
        >
          함께 프로젝트를 한 경험이 있다면?
        </Typography>
        <Button onClick={handleClick}>피어 테스트 응답하기</Button>
      </Footer>
    </Fragment>
  );
}
