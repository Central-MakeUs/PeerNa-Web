import { editProfileInfo } from '@apis/mypage';
import { useMutation } from '@tanstack/react-query';
import { useFlow } from '@hooks/useStackFlow';

export interface ProfileEdit {
  job: string;
  part: string;
  oneLiner: string;
}

export const useProfileEdit = () => {
  const { pop } = useFlow();
  const handleSuccess = () => pop();
  return useMutation<void, Error, ProfileEdit>({
    mutationFn: async data => {
      return await editProfileInfo(data);
    },
    onSuccess: () => {
      handleSuccess();
    },
    onError: () => {
      console.log('실패');
    },
  });
};
