import { nameSizeValidator, selfTestState } from '@store/selfTest';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function useSelfTestInformation() {
  const [selfTest, setSelfTest] = useRecoilState(selfTestState);
  const isValidName = useRecoilValue(nameSizeValidator);
  const handleChangeName = (newName: string) => {
    setSelfTest(prev => ({
      ...prev,
      name: newName,
    }));
  };
  const handleChangeJob = (newJob: string) => {
    setSelfTest(prev => ({
      ...prev,
      job: newJob,
    }));
  };
  const handleChangePosition = (newPosition: string) => {
    setSelfTest(prev => ({
      ...prev,
      name: newPosition,
    }));
  };

  return {
    selfTest,
    isValidName,
    handleChangeName,
    handleChangeJob,
    handleChangePosition,
  };
}
