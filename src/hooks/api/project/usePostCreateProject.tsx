import { useMutation } from '@tanstack/react-query';
import { ApiResponse, http } from 'api';

interface ProjectCreateRequestDTO {
  projectName: string;
  startDate: string;
  endDate: string;
  introduce: string;
  openChattingLink: string;
  notionLink: string;
  githubLink: string;
}
interface ProjectCreateResponseDTO {
  memberId: number;
  status: string;
  calledAt: string;
}

const postCreateProject = async (
  project: ProjectCreateRequestDTO,
): Promise<ApiResponse<ProjectCreateResponseDTO>> => {
  return await http.post('/project', { ...project });
};

export const usePostCreateProject = (
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: postCreateProject,
    onSuccess: successCallback,
    onError: errorCallback,
  });
};
