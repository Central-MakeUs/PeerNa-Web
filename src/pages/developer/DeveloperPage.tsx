import SvgIcon from '@components/common/atom/SvgIcon';
import LoadingFallback from '@components/common/molecule/LoadingFallback';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import Test from '@components/wrapper/Test';
import { FLOWER_CARDS } from '@constants/images';
import useModal from '@hooks/store/useModal';
import { Button } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';
import { removeAccessToken, removeRefreshToken } from '@utils/token';
import { WebviewBridge } from '@utils/webview';
import toast from 'react-hot-toast';

const DeveloperPage: ActivityComponentType = () => {
  const { openModal } = useModal('login');
  const handleDownload = () => {
    fetch(FLOWER_CARDS['I'], { cache: 'no-cache' })
      .then(response => response.blob())
      .then(blob => {
        const href = window.URL.createObjectURL(blob);
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
          toast.success('이미지가 저장됐어요!', {
            icon: <SvgIcon id="Complete" color="gray08" />,
          });
        } else {
          console.log(href);
          const link = document.createElement('a');
          link.href = href;
          link.download = FLOWER_CARDS['I'];
          console.log(link.download);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          toast.success('이미지가 저장됐어요!', {
            icon: <SvgIcon id="Complete" color="gray08" />,
          });
        }
      })
      .catch(error => console.error('Error downloading file:', error));
  };
  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={() => null} />
        </Header.TopBar>
        <Header.Body>
          <Header.Title>hello</Header.Title>
        </Header.Body>
      </Header>
      <Content>
        <div className="min-h-screen">
          <Button onClick={handleDownload}>다운로드</Button>
        </div>
        <ErrorBoundaryWithSuspense onReset={() => console.log('reset')}>
          <Test />
        </ErrorBoundaryWithSuspense>
        <LoadingFallback />
        <div className="min-h-screen">
          <Button onClick={() => openModal()}>로그인</Button>
        </div>

        <div className="min-h-screen">
          <Button
            onClick={() => {
              removeAccessToken();
              removeRefreshToken();
            }}
          >
            로그인
          </Button>
        </div>
        <div>hello</div>
      </Content>
      <Footer bottom={1}>
        <Button>test button</Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default DeveloperPage;
