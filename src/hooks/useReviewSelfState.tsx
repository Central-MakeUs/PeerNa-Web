import { nameSizeValidator, reviewSelfState } from '@store/reviewSelfState';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function useSelfTestInformation() {
  const [reviewSelf, setReviewSelf] = useRecoilState(reviewSelfState);
  const isValidName = useRecoilValue(nameSizeValidator);

  const handleChangeName = (newName: string) => {
    setReviewSelf(prev => ({
      ...prev,
      name: newName,
    }));
  };

  const handleChangeJob = (newJob: string) => {
    setReviewSelf(prev => ({
      ...prev,
      job: newJob,
    }));
  };

  const handleChangePart = (newPart: string) => {
    setReviewSelf(prev => ({
      ...prev,
      part: newPart,
    }));
  };

  return {
    reviewSelf,
    isValidName,
    handleChangeName,
    handleChangeJob,
    handleChangePart,
  };
}
