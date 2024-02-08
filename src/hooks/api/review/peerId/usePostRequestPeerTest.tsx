import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

const postRequestPeerReview = async ({
  peerId,
}: {
  peerId: number;
}): Promise<ApiResponse<ProjectInviteSuccessType>> => {
  return await http.post(`review/request/${peerId}`, {
    peerId,
  });
};

export default function usePostRequestPeerTest() {
  const { handleError } = useErrorHandler();

  return useMutation({
    mutationFn: postRequestPeerReview,
    onSuccess: () => {
      toast.success('응답 요청이 완료되었습니다.');
    },
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
