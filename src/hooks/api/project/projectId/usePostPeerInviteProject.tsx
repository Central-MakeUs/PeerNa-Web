import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

interface MemberProjectRequestDTO {
  projectId: number;
  peerId: number;
}

interface MemberProjectResponseDTO extends ProjectInviteSuccessType {}

const postPeerInviteProject = async ({
  projectId,
  peerId,
}: MemberProjectRequestDTO): Promise<ApiResponse<MemberProjectResponseDTO>> => {
  return await http.post(`/project/${projectId}/invite/${peerId}`, {
    projectId,
    peerId,
  });
};

export default function usePostPeerInviteProject() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postPeerInviteProject,
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
