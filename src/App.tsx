import BottomSheet from '@components/common/organism/BottomSheet';
import { Stack } from '@hooks/useStackFlow';

function App() {
  return (
    <div className="min-h-screen">
      {/* Notice)Stack은 StackFlow의 진입점입니다. */}
      {/*         react-router-dom의 createBrowseRouter */}
      <Stack />
      <BottomSheet />
    </div>
  );
}

export default App;
