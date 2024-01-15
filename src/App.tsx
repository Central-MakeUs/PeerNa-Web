import { Stack } from '@hooks/useStackFlow';

function App() {
  return (
    <div className="">
      {/* Notice)Stack은 StackFlow의 진입점입니다. */}
      {/*         react-router-dom의 createBrowseRouter */}
      <Stack />
    </div>
  );
}

export default App;
