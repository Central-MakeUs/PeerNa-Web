import BottomSheet from '@components/common/organism/BottomSheet';
import { Stack } from '@hooks/useStackFlow';
import { Toaster } from 'react-hot-toast';

function App() {
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
    </div>
  );
}

export default App;
