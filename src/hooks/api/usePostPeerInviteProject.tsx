import { useMutation } from '@tanstack/react-query';
import { ApiResponse, http } from 'api';

interface MemberProjectRequestDTO {
  projectId: number;
  peerId: number;
}

interface MemberProjectResponseDTO {
  memberId: number;
  status: string;
  callAt: string;
}

export const postPeerInviteProject = async ({
  projectId,
  peerId,
}: MemberProjectRequestDTO): Promise<ApiResponse<MemberProjectResponseDTO>> => {
  return await http.post(`/project/${projectId}/invite/${peerId}`, {
    projectId,
    peerId,
  });
};

export const usePostPeerInviteProject = (
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: postPeerInviteProject,
    onSuccess: successCallback,
    onError: errorCallback,
  });
};
