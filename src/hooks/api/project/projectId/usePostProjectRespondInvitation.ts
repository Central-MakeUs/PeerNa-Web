import { useMutation } from '@tanstack/react-query';
import { RespondType } from '@type/enums';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import toast from 'react-hot-toast';

interface ProjectRespondInvitationRequestDTO {
  projectId: string;
  type: RespondType;
}

// TODO ProjectInviteSuccessType가 반환되지 않는 경우가 있던데 어떻게 처리할지..
interface ProjectRespondInvitationResponseDTO
  extends ProjectInviteSuccessType {}

const postProjectRespondInvitation = async ({
  projectId,
  type,
}: ProjectRespondInvitationRequestDTO): Promise<
  ApiResponse<ProjectRespondInvitationResponseDTO>
> => {
  const response = await http.post(`/project/${projectId}/invite/${type}`);
  return response.data;
};

export default function usePostProjectRespondInvitation(
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postProjectRespondInvitation,
    onSuccess: () => toast.success('요청되었습니다'),
    onError: errorCallback,
  });
}
