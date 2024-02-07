import gradient from '@assets/common/bg_gradient.png';
import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import Footer from '@components/wrapper/Footer';
import { FLOWER_CARDS } from '@constants/images';
import { TEST_TYPE_INFO } from '@constants/list';
import useGetMe from '@hooks/api/member/index/useGetMe';
import useGetReviewResult from '@hooks/api/member/index/useGetReviewResult';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import FlipCard from '@pages/review/result/molecule/FlipCard';
import ShareDrawer from '@pages/review/result/molecule/ShareDrawer';
import { TestType } from '@type/enums';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

interface ResultShareProps {
  type: string;
  curStep: number;
}

// TODO 유저네임 변경 필요
export default function ResultShare({ type, curStep }: ResultShareProps) {
  const { push } = useFlow();
  const { data } = useGetReviewResult();
  const ref = useRef<HTMLDivElement>(null);
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);

  const handleClickBackIcon = () =>
    push('ReviewResultPage', { type: type, step: String(curStep - 1) });

  const handleClickRightButton = () => push('HomePage', {});

  const handleClickShare = () => setOpenBottomSheet(true);

  const { data: user } = useGetMe();
  const handleClickShareLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/review/peer/?uuid=${user.uuid}&step=1`,
      );
      toast.success('링크 복사 완료!', {
        icon: <SvgIcon id="Complete" color="gray08" />,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDownload = () => {
    fetch(FLOWER_CARDS[data.testType])
      .then(response => response.blob())
      .then(blob => {
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = FLOWER_CARDS[data.testType];
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('이미지가 저장됐어요!', {
          icon: <SvgIcon id="Complete" color="gray08" />,
        });
      })
      .catch(error => console.error('Error downloading file:', error));
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center"
      style={{ backgroundImage: gradient }}
    >
      <NavigationHeader
        backIconProps={{
          isShow: true,
          handleClick: handleClickBackIcon,
        }}
        rightButtonProps={{
          isShow: true,
          text: '홈으로 가기',
          handleClick: handleClickRightButton,
        }}
        bodyProps={{
          isShow: true,
          title: `${data.memberName} 님의 피어 유형은\n ${TEST_TYPE_INFO[data.testType].title}에요`,
          textAlign: 'center',
        }}
      />
      <Spacer y={10} />
      <FlipCard
        selfTestType={data.testType}
        peerTestType={TestType.UNKNOWN}
        size="L"
        ref={ref}
      />
      <Footer bottom={3} className="flex">
        <Button buttonVariant="tertiary" onClick={handleDownload}>
          카드 저장하기
        </Button>
        <Button onClick={handleClickShare}>카드 공유하기</Button>
      </Footer>

      <ShareDrawer
        openBottomSheet={openBottomSheet}
        setOpenBottomSheet={setOpenBottomSheet}
        handleClickShareLink={handleClickShareLink}
      />
    </div>
  );
}
