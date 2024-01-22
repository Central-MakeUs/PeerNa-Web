import { PeerGradeTypes, reviewState } from '@store/reviewState';
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

  const handleChangePeerGrade = (type: PeerGradeTypes) => {
    setReview(prev => ({
      ...prev,
      peerType: type,
    }));
  };

  const handleChangeFeedback = (feedback: string) => {
    setReview(prev => ({
      ...prev,
      feedback,
    }));
  };

  return {
    review,
    handleAddAnswers,
    handleRemoveLastAnswers,
    handleChangePeerGrade,
    handleChangeFeedback,
  };
}
