import { PageTypes } from '@constants/activities';
import { historyState } from '@store/history';
import { useRecoilState } from 'recoil';

export default function useHistory() {
  const [history, setHistory] = useRecoilState(historyState);
  console.log('set history', history);

  const handleChangeHistory = (
    activity: PageTypes,
    params: Record<string, string>,
  ) => {
    setHistory(prev => ({
      ...prev,
      activity,
      params,
    }));
  };

  const handleClearHistory = () =>
    setHistory(() => ({
      activity: 'HomePage',
      params: {},
    }));

  return { history, handleChangeHistory, handleClearHistory };
}
