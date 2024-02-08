import { useMutation } from '@tanstack/react-query';
import { ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import toast from 'react-hot-toast';

interface MemberProjectResponseDTO extends ProjectInviteSuccessType {}

const postProjectRequestJoin = async (
  projectId: string,
): Promise<ApiResponse<MemberProjectResponseDTO>> => {
  return await http.post(`/project/${projectId}/request-join`);
};

export default function usePostProjectRequestJoin(
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postProjectRequestJoin,
    onSuccess: () => toast.success('참가신청되었습니다.'),
    onError: errorCallback,
  });
}
