import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';

interface ProjectRespondInvitationRequestDTO {
  projectId: number;
  peerId: number;
}

// TODO ProjectInviteSuccessType가 반환되지 않는 경우가 있던데 어떻게 처리할지..
interface ProjectRespondInvitationResponseDTO
  extends ProjectInviteSuccessType {}

const postProjectRespondInvitation = async ({
  projectId,
  peerId,
}: ProjectRespondInvitationRequestDTO): Promise<
  ApiResponse<ProjectRespondInvitationResponseDTO>
> => {
  const response = await http.post(`/project/${projectId}/invite/${peerId}`);
  return response.data;
};

export default function usePostProjectRespondInvitation(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postProjectRespondInvitation,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
