import { ApiResponse, http } from '@apis/index';
import { JobType, PartType } from '@constants/review';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ReviewResultType } from '@type/index';

export interface ProjectResponseDTO {
  projectId: number;
  projectName: string;
  introduce: string;
  startDate: string;
  endDate: string;
  openChattingLink: string;
  notionLink: string;
  githubLink: string;
  creatorSimpleProfileDto: {
    memberId: number;
    name: string;
    job: JobType;
    part: PartType;
    peerTestType: ReviewResultType;
    oneLiner: string;
    totalScore: number;
  };
}
export const getProjectList = async (
  projectId: number,
): Promise<ApiResponse<ProjectResponseDTO>> => {
  const response = await http.get(`/project/${projectId}`);
  return response.data;
};

export const useGetProjectById = (projectId: number) => {
  return useSuspenseQuery({
    queryKey: ['getProjectList', projectId],
    queryFn: () => getProjectList(projectId),
    select: data => data.result,
  });
};
