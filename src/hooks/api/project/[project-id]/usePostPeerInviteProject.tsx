import { ApiResponse, http } from '@/API';
import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';

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

export default function usePostPeerInviteProject(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postPeerInviteProject,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
