import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

interface ProjectRequestJoinAcceptDTO {
  projectId: string;
  peerId: string;
}

interface ProjectResponseJoinDeclineDTO extends ProjectInviteSuccessType {}

const postProjectRequestJoinAccept = async ({
  projectId,
  peerId,
}: ProjectRequestJoinAcceptDTO): Promise<
  ApiResponse<ProjectResponseJoinDeclineDTO>
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
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
