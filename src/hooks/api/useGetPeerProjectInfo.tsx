import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponse, http } from 'api';

export interface PeerProjectInfoDTO {
  projectId: number;
  projectName: string;
  introduce: string;
  startDate: string;
  endDate: string;
  openChattingLink: string;
  notionLink: string;
  githubLink: string;
  creatorSimpleProfileDto: createProfileDTO;
}

export interface createProfileDTO {
  memberId: number;
  name: string;
  job: string;
  part: string;
  peerTestType: 'D' | 'I' | 'S' | 'C';
  oneLiner: string;
  totalScore: number;
}

export const getPeerProjectInfo = async (
  projectId: number,
): Promise<ApiResponse<PeerProjectInfoDTO>> => {
  const response = await http.get(`/project/${projectId}`);
  return response.data;
};

export const useGetPeerProjectInfo = (projectId: number) => {
  return useSuspenseQuery({
    queryKey: ['getPeerProjectInfo', projectId],
    queryFn: () => getPeerProjectInfo(projectId),
    select: data => data.result,
  });
};
