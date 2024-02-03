import { http } from '@apis/index';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from 'models';

export const enum RespondType {
  ACCEPT = 'accept',
  DECLINE = 'decline',
}

interface ProjectRespondInvitationRequestDTO {
  projectId: number;
  type: RespondType;
}

interface ProjectRespondInvitationResponseDTO {
  memberId: 0;
  status: 'string';
  calledAt: '2024-02-03T16:29:00.098Z';
}

export const postProjectRespondInvitation = async ({
  projectId,
  type,
}: ProjectRespondInvitationRequestDTO): Promise<
  ApiResponse<ProjectRespondInvitationResponseDTO>
> => {
  const response = await http.post(`/project/${projectId}/invite/${type}`);
  return response.data;
};

export const usePostProjectRespondInvitation = (
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: postProjectRespondInvitation,
    onSuccess: successCallback,
    onError: errorCallback,
  });
};
