import { PeerTypes, commonTestState } from '@store/commonTest';
import { useRecoilState } from 'recoil';

export default function useCommonTestState() {
  const [commonTest, setCommonTest] = useRecoilState(commonTestState);

  const handleAddAnswers = (answer: number) => {
    setCommonTest(prev => ({
      ...prev,
      answers: [...prev.answers, answer],
    }));
  };

  const handleRemoveLastAnswers = () => {
    setCommonTest(prev => ({
      ...prev,
      answers: prev.answers.slice(0, -1),
    }));
  };

  const handleChangePeerType = (type: PeerTypes) => {
    setCommonTest(prev => ({
      ...prev,
      peerType: type,
    }));
  };

  const handleChangeOneLineReview = (oneLineReview: string) => {
    setCommonTest(prev => ({
      ...prev,
      oneLineReview,
    }));
  };

  return {
    commonTest,
    handleAddAnswers,
    handleRemoveLastAnswers,
    handleChangePeerType,
    handleChangeOneLineReview,
  };
}
