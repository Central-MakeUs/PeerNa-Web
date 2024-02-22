import { reviewHistoryState } from '@store/reviewHistory';
import { useRecoilState } from 'recoil';

export default function useReviewHistory() {
  const [reviewHistory, setReviewHistory] = useRecoilState(reviewHistoryState);
  const isExistUuid = (uuid: string) => reviewHistory.uuidList.includes(uuid);

  const handleAddUuid = (uuid: string) => {
    setReviewHistory(prev => ({
      ...prev,
      uuidList: [...prev.uuidList, uuid],
    }));
  };
  return { reviewHistory, isExistUuid, handleAddUuid };
}
