import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

interface ProjectRequestJoinDeclineDTO {
  projectId: number;
  peerId: number;
}

interface ProjectRequestJoinDeclineDTO extends ProjectInviteSuccessType {}

const postProjectRequestJoinDecline = async ({
  projectId,
  peerId,
}: ProjectRequestJoinDeclineDTO): Promise<
  ApiResponse<ProjectRequestJoinDeclineDTO>
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
    onSuccess: () => {
      toast.success('프로젝트 참여 신청이 거절되었습니다');
    },
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
