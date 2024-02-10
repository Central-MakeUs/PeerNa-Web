import {
  PeerGradeTypes,
  REVIEW_INITIAL_STATE,
  reviewState,
} from '@store/reviewState';
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

  const handleChangeUuid = (uuid: string) => {
    setReview(prev => ({
      ...prev,
      uuid,
    }));
  };

  const handleChangeTargetId = (targetId: string) => {
    setReview(prev => ({
      ...prev,
      targetId,
    }));
  };

  const handleChangeSubTargetId = (subTargetId: string) => {
    setReview(prev => ({
      ...prev,
      subTargetId,
    }));
  };

  const handleChangePeerName = (peerName: string) => {
    setReview(prev => ({
      ...prev,
      peerName,
    }));
  };

  const handleClearReviews = () => setReview(REVIEW_INITIAL_STATE);

  return {
    review,
    handleAddAnswers,
    handleRemoveLastAnswers,
    handleChangePeerGrade,
    handleChangeFeedback,
    handleClearReviews,
    handleChangeUuid,
    handleChangeTargetId,
    handleChangeSubTargetId,
    handleChangePeerName,
  };
}
