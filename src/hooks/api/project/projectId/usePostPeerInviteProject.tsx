import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import toast from 'react-hot-toast';

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
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postPeerInviteProject,
    onSuccess: () => {
      toast.success('프로젝트 초대가 완료되었습니다.');
    },
    onError: errorCallback,
  });
}
