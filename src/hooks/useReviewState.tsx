import { PeerTypes, reviewState } from '@store/reviewState';
import { useRecoilState } from 'recoil';

export default function useReviewState() {
  const [review, setReview] = useRecoilState(reviewState);

  const handleAddAnswers = (answer: number) => {
    setReview(prev => ({
      ...prev,
      answers: [...prev.answers, answer],
    }));
  };

  const handleRemoveLastAnswers = () => {
    setReview(prev => ({
      ...prev,
      answers: prev.answers.slice(0, -1),
    }));
  };

  const handleChangePeerType = (type: PeerTypes) => {
    setReview(prev => ({
      ...prev,
      peerType: type,
    }));
  };

  const handleChangeOneLineReview = (oneLineReview: string) => {
    setReview(prev => ({
      ...prev,
      oneLineReview,
    }));
  };

  return {
    review,
    handleAddAnswers,
    handleRemoveLastAnswers,
    handleChangePeerType,
    handleChangeOneLineReview,
  };
}
