import gradient from '@assets/gradient.png';
import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import { cardText } from '@constants/card';
import { useGetMe } from '@hooks/api/useGetMe';
import { useGetReviewResult } from '@hooks/api/useGetReviewResult';
import { useFlow } from '@hooks/useStackFlow';
import { Spacer } from '@nextui-org/react';
import FlipCard from '@pages/review/result/molecule/FlipCard';
import ShareDrawer from '@pages/review/result/molecule/ShareDrawer';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
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

  // TODO 다운로드 할 때에는 애니메이션을 정상으로 돌려야 함.
  const handleClickDownload = () => {
    if (ref.current) {
      domtoimage
        .toBlob(ref.current)
        .then(blob => {
          saveAs(blob, 'card.png');
        })
        .catch(error => {
          console.error('Error converting to image', error);
        });
    }
  };

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
          title: `${data.memberName} 님의 피어 유형은\n ${cardText[data.testType].title}에요`,
          textAlign: 'center',
        }}
      />

      <Spacer y={10} />

      <FlipCard testType={data.testType} ref={ref} />

      <FixedButtonContainer direction="row">
        <Button buttonVariant="tertiary" onClick={handleClickDownload}>
          <Typography variant="body01">카드 저장하기</Typography>
        </Button>
        <Button onClick={handleClickShare}>
          <Typography variant="body01" fontColor="white">
            카드 공유하기
          </Typography>
        </Button>
      </FixedButtonContainer>
      <ShareDrawer
        openBottomSheet={openBottomSheet}
        setOpenBottomSheet={setOpenBottomSheet}
        handleClickShareLink={handleClickShareLink}
      />
    </div>
  );
}
