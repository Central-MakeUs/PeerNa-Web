import { Stack } from '@components/common/atom/StackFlow';
import { GlobalSprite } from '@assets/GlobalSprite';

function App() {
  return (
    <div className="">
      {/* Notice)Stack은 StackFlow의 진입점입니다. */}
      {/*         react-router-dom의 createBrowseRouter */}
      <Stack />
      <GlobalSprite />
    </div>
  );
}

export default App;
