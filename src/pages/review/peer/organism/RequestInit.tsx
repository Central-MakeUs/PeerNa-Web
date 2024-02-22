import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { StackModals } from '@components/common/molecule/Modals';
import Content from '@components/wrapper/Content';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetUserName from '@hooks/api/member/index/useGetUserName';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import useReviewHistory from '@hooks/store/useReviewHistory';
import useReviewState from '@hooks/store/useReviewState';
import { Spacer } from '@nextui-org/react';
import { Fragment, useEffect, useState } from 'react';

interface RequestInitProps {
  uuid?: string;
  memberId?: string;
}

// TODO username 전체 변경 필요함.
export default function RequestInit({ uuid, memberId }: RequestInitProps) {
  const { handleChangeUuid, handleChangeTargetId, handleChangePeerName } =
    useReviewState();
  const { data } = useGetUserName(uuid, memberId);
  const username = data.name;

  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '2', memberId });

  const { isExistUuid } = useReviewHistory();
  const [alreadyReview, setAlreadyReview] = useState<boolean>(false);

  useEffect(() => {
    if (username) {
      handleChangeUuid(uuid!);
      handleChangeTargetId(memberId!);
      handleChangePeerName(username);
    }

    if (uuid) {
      // 포함돼있으면 true를 던짐
      const isExistUuidReivew = isExistUuid(uuid);
      setAlreadyReview(isExistUuidReivew);
    }
  }, []);

  const { openModal } = useModal('alreadyReview');
  useEffect(() => {
    if (alreadyReview) openModal();
  }, [alreadyReview]);

  return (
    <Fragment>
      <Header>
        <Spacer y={10} />
        <Header.Body className="gap-1">
          <Typography variant="header01" color="gray08">
            {`${username} 님이\n 피어 테스트 응답을 요청했어요`}
          </Typography>
          <Typography variant="body02" color="gray06">
            {`테스트에 응답해주신다면\n ${username} 님이 매우 고마워할 거에요!`}
          </Typography>
        </Header.Body>
      </Header>
      <Content>
        <div className="w-full h-[calc(100%-180px)] flex items-center justify-center">
          <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
            <SvgIcon
              id="NotepadPerson"
              color="primary"
              width={64}
              height={64}
            />
          </div>
        </div>
      </Content>
      <Footer bottom={5} className="px-4">
        <Typography
          variant="body02"
          fontColor="gray04"
          className="text-center mb-3"
        >
          함께 프로젝트를 한 경험이 있다면?
        </Typography>
        <Button isDisabled={alreadyReview} onClick={handleClick}>
          피어 테스트 응답하기
        </Button>
      </Footer>
      <StackModals />
    </Fragment>
  );
}
