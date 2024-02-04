import { ApiResponse, http } from '@/API';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ProjectInformationWithCreatorType } from '@type/index';

interface ProjectByIdResponseDTO extends ProjectInformationWithCreatorType {}

const getProjectById = async (
  projectId: number,
): Promise<ApiResponse<ProjectByIdResponseDTO>> => {
  const response = await http.get(`/project/${projectId}`);
  return response.data;
};

export default function useGetProjectById(projectId: number) {
  return useSuspenseQuery({
    queryKey: ['getProjectById', projectId],
    queryFn: () => getProjectById(projectId),
    select: data => data.result,
  });
}
