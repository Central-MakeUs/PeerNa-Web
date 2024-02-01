import { ApiResponse, http } from '@apis/index';
import { JobType, PartType } from '@constants/review';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface MemberMeDTO {
  name: string;
  job: JobType;
  part: PartType;
  oneLiner: string;
  uuid: string;
}

export const getMe = async (): Promise<ApiResponse<MemberMeDTO>> => {
  const response = await http.get('/member/me');
  return response.data;
};

export const useGetMe = () => {
  return useSuspenseQuery({
    queryKey: ['getMemberWithUUID'],
    queryFn: getMe,
    select: data => data.result,
  });
};
