import gradient from '@assets/common/bg_gradient.png';
import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { CONFETTI, FLOWER_CARDS } from '@constants/images';
import { TEST_TYPE_INFO } from '@constants/list';
import {
  PEER_TEST_REQUEST,
  PEER_TEST_TITLE,
  PEER_TEST_URL,
} from '@constants/share';
import useGetMe from '@hooks/api/member/index/useGetMe';
import useGetReviewResult from '@hooks/api/member/index/useGetReviewResult';
import useShareLink from '@hooks/common/useShareLink';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import FlipCard from '@pages/review/result/molecule/FlipCard';
import ShareDrawer from '@pages/review/result/molecule/ShareDrawer';
import { TestType } from '@type/enums';
import { WebviewBridge } from '@utils/webview';
import Lottie from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
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

  const { handleSendKakaoMessage, handleShareLink } = useShareLink();

  const handleClickBackIcon = () =>
    push('ReviewResultPage', { type: type, step: String(curStep - 1) });

  const handleClickRightButton = () => push('HomePage', {});

  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const handleClickShare = () => setOpenBottomSheet(true);

  const { data: user } = useGetMe();

  const username = user?.name ?? '';
  const uuid = user?.uuid ?? '';

  const handleKakaoShare = () => {
    handleSendKakaoMessage({
      ...PEER_TEST_REQUEST,
      title: PEER_TEST_TITLE(username),
      url: PEER_TEST_URL(uuid),
    });
  };

  const handleCopyLink = () => {
    handleShareLink({
      type: 'peerTest',
      uuid: uuid,
    });
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
          const link = document.createElement('a');
          link.href = href;
          link.download = FLOWER_CARDS[data.testType];
          console.log(link);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          toast.success('이미지가 저장됐어요!', {
            icon: <SvgIcon id="Complete" color="gray08" />,
          });
        }
      })
      .catch(error => {
        console.error('Error downloading file:', error);
        if (
          navigator.userAgent.includes('iPhone') ||
          navigator.userAgent.includes('Android')
        ) {
          toast.error('이미지 저장엔 권한이 필요해요');
        } else toast.error('이미지를 저장하지 못했어요');
      });
  };

  const [showLottie, setShowLottie] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(() => true);
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

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
      {showLottie && (
        <Lottie
          animationData={CONFETTI}
          autoPlay={false}
          loop={false}
          className="z-10 absolute"
        />
      )}
      <FlipCard
        selfTestType={data.testType}
        peerTestType={TestType.UNKNOWN}
        size="L"
        ref={ref}
      />
      <Footer bottom={3} className="flex gap-4 z-50">
        <Button buttonVariant="tertiary" onClick={handleDownload}>
          카드 저장하기
        </Button>
        <Button onClick={handleClickShare}>동료에게 물어보기</Button>
      </Footer>

      <ShareDrawer
        openBottomSheet={openBottomSheet}
        setOpenBottomSheet={setOpenBottomSheet}
        handleClickShareLink={handleCopyLink}
        handleClickKakaoShare={handleKakaoShare}
      />
    </div>
  );
}
