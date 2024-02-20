import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

interface ProjectRequestJoinDeclineDTO {
  projectId: string;
  peerId: string;
}

interface ProjectResponseJoinDeclineDTO extends ProjectInviteSuccessType {}

const postProjectRequestJoinDecline = async ({
  projectId,
  peerId,
}: ProjectRequestJoinDeclineDTO): Promise<
  ApiResponse<ProjectResponseJoinDeclineDTO>
> => {
  return await http.post(
    `/project/${projectId}/request-join/${peerId}/decline`,
    {
      projectId,
      peerId,
    },
  );
};

export default function usePostProjectRequestJoinDecline() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postProjectRequestJoinDecline,
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
