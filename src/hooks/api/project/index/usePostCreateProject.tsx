import { useMutation } from '@tanstack/react-query';
import { ProjectInformationType, ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import toast from 'react-hot-toast';

interface ProjectCreateRequestDTO extends ProjectInformationType {}

interface ProjectCreateResponseDTO extends ProjectInviteSuccessType {}

const postCreateProject = async (
  project: ProjectCreateRequestDTO,
): Promise<ApiResponse<ProjectCreateResponseDTO>> => {
  return await http.post('/project', { ...project });
};

export default function usePostCreateProject(
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postCreateProject,
    onSuccess: () => {
      toast.success('프로젝트 생성이 완료되었습니다.');
    },
    onError: errorCallback,
  });
}
