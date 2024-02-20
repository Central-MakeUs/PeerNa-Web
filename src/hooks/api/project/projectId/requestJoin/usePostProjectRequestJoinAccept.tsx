import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

interface ProjectRequestJoinAcceptDTO {
  projectId: number;
  peerId: number;
}

interface ProjectRequestJoinDeclineDTO extends ProjectInviteSuccessType {}

const postProjectRequestJoinAccept = async ({
  projectId,
  peerId,
}: ProjectRequestJoinAcceptDTO): Promise<
  ApiResponse<ProjectRequestJoinDeclineDTO>
> => {
  return await http.post(
    `/project/${projectId}/request-join/${peerId}/accept`,
    {
      projectId,
      peerId,
    },
  );
};

export default function usePostProjectRequestJoinAccept() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postProjectRequestJoinAccept,
    onSuccess: () => {
      toast.success('수락 완료!');
    },
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
