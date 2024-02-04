import {
  REVIEW_SELF_INITIAL_STATE,
  nameSizeValidator,
  reviewSelfState,
} from '@store/reviewSelfState';
import { JobType, PartType } from "@type/enums";
import { useRecoilState, useRecoilValue } from 'recoil';

export default function useReviewSelfState() {
  const [reviewSelf, setReviewSelf] = useRecoilState(reviewSelfState);
  const isValidName = useRecoilValue(nameSizeValidator);

  const handleChangeName = (newName: string) => {
    setReviewSelf(prev => ({
      ...prev,
      name: newName,
    }));
  };

  const handleChangeJob = (newJob: JobType) => {
    setReviewSelf(prev => ({
      ...prev,
      job: newJob,
    }));
  };

  const handleChangePart = (newPart: PartType) => {
    setReviewSelf(prev => ({
      ...prev,
      part: newPart,
    }));
  };

  const handleClear = () => setReviewSelf(REVIEW_SELF_INITIAL_STATE);

  return {
    reviewSelf,
    isValidName,
    handleChangeName,
    handleChangeJob,
    handleChangePart,
    handleClear,
  };
}
