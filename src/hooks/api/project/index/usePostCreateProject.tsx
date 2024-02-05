import { useMutation } from '@tanstack/react-query';
import { ProjectInformationType, ProjectInviteSuccessType } from '@type/index';
import { ApiResponse, http } from '@utils/API';

interface ProjectCreateRequestDTO extends ProjectInformationType {}

interface ProjectCreateResponseDTO extends ProjectInviteSuccessType {}

const postCreateProject = async (
  project: ProjectCreateRequestDTO,
): Promise<ApiResponse<ProjectCreateResponseDTO>> => {
  return await http.post('/project', { ...project });
};

export default function usePostCreateProject(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postCreateProject,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
