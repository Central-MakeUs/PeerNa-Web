import gradient from '@assets/common/bg_gradient.png';
import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { FLOWER_CARDS } from '@constants/images';
import { TEST_TYPE_INFO } from '@constants/list';
import useGetMe from '@hooks/api/member/index/useGetMe';
import useGetReviewResult from '@hooks/api/member/index/useGetReviewResult';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import FlipCard from '@pages/review/result/molecule/FlipCard';
import ShareDrawer from '@pages/review/result/molecule/ShareDrawer';
import { TestType } from '@type/enums';
import { WebviewBridge } from '@utils/webview';
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
    const uuid = user?.uuid ?? '';
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/review/peer/?uuid=${uuid}&step=1`,
      );
      toast.success('링크 복사 완료!', {
        icon: <SvgIcon id="Complete" color="gray08" />,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDownload = () => {
    fetch(FLOWER_CARDS[data.testType], { cache: 'no-cache' })
      .then(response => response.blob())
      .then(blob => {
        const href = window.URL.createObjectURL(blob);
        console.log(navigator.userAgent);
        if (
          navigator.userAgent.includes('iPhone') ||
          navigator.userAgent.includes('Android')
        ) {
          const reader = new FileReader();
          reader.onloadend = () => {
            WebviewBridge.postMessage({
              type: 'card-image',
              data: reader.result,
            });
          };
          reader.readAsDataURL(blob);
        } else {
          console.log('else call');
          const link = document.createElement('a');
          link.href = href;
          link.download = FLOWER_CARDS[data.testType];
          console.log(link);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
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
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleClickBackIcon} />
          <Header.RightButton
            text="홈으로 가기"
            handleClick={handleClickRightButton}
          />
        </Header.TopBar>
        <Header.Body textAlign="center">
          <Header.Title>{`${data.memberName} 님의 피어 유형은\n ${TEST_TYPE_INFO[data.testType].title}에요`}</Header.Title>
        </Header.Body>
      </Header>
      <Spacer y={10} />
      <FlipCard
        selfTestType={data.testType}
        peerTestType={TestType.UNKNOWN}
        size="L"
        ref={ref}
      />
      <Footer bottom={3} className="flex gap-4">
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
