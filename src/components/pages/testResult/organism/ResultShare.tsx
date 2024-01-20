import Button from '@components/common/atom/Button';
import IconButton from '@components/common/atom/IconButton';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FlipCard from '@components/pages/testResult/molecule/FlipCard';
import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import { KakaoShareImage } from '@constants/images';
import { useFlow } from '@hooks/useStackFlow';
import { Spacer } from '@nextui-org/spacer';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

interface ResultShareProps {
  type: string;
  curStep: number;
}

export default function ResultShare({ type, curStep }: ResultShareProps) {
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { push } = useFlow();

  const handleClickBackIcon = () =>
    push('TestResultPage', { type: type, step: String(curStep - 1) });

  const handleClickRightButton = () => push('HomePage', {});

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

  const handleClickShare = () => {
    setOpenBottomSheet(true);
  };

  const handleClickShareLink = async () => {
    try {
      await navigator.clipboard.writeText('shareLink');
      toast.success('링크 복사 완료!', {
        icon: <SvgIcon id="Complete" color="gray08" />,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
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
          title: '뇽뇽뇽뇽뇽 님의 피어 유형은 성취하는 행동 대장이에요',
          textAlign: 'center',
        }}
      />
      <Spacer y={10} />
      <FlipCard ref={ref} />
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
      <Drawer
        open={openBottomSheet}
        onOpenChange={open => setOpenBottomSheet(open)}
      >
        <DrawerContent className="mx-auto max-w-[600px]">
          <div className="p-4 flex justify-center gap-4">
            <div className="flex flex-col gap-2 items-center">
              <IconButton
                iconProps={{
                  id: 'Share',
                  width: 36,
                  height: 36,
                  color: 'primary',
                }}
                onClick={handleClickShareLink}
              />
              <Typography variant="body03" className="text-center">
                링크복사
              </Typography>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <button className="h-[36px]">
                <img src={KakaoShareImage} style={{ width: 36, height: 36 }} />
              </button>
              <Typography variant="body03" className="text-center">
                카카오톡
              </Typography>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
