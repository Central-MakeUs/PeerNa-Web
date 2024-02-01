import BottomSheet from '@components/common/organism/BottomSheet';
import LoginModal from '@components/pages/login/organism/LoginModal';
import { Stack } from '@hooks/useStackFlow';
import { WebviewBridge } from '@utils/webview';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    WebviewBridge.registerMessageListener();
    window.AppleID.auth.init({
      clientId: import.meta.env.VITE_APPLE_CLIENT_ID,
      scope: 'email',
      redirectURI: import.meta.env.VITE_APPLE_REDIRECT_URI,
      usePopup: false,
    });
  }, []);

  return (
    <div className="w-screen min-h-screen flex justify-center">
      {/* Notice)Stack은 StackFlow의 진입점입니다. */}
      {/*         react-router-dom의 createBrowseRouter */}
      <Stack />
      <BottomSheet />
      <Toaster
        toastOptions={{
          style: {
            borderRadius: '100px',
          },
        }}
      />
      <LoginModal />
    </div>
  );
}

export default App;
