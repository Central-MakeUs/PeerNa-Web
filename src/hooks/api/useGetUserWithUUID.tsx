import { http, ApiResponse } from '@apis/index';
import { JobType, PartType } from '@constants/review';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface MemberMeResponseDTO {
  name: string;
  job: JobType;
  part: PartType;
  oneLiner: string;
  uuid: string;
}

export const getUserWithUUID = async (): Promise<
  ApiResponse<MemberMeResponseDTO>
> => {
  const response = await http.get('/member/me');
  return response.data;
};

export const useGetUserWithUUID = () => {
  return useSuspenseQuery({
    queryKey: ['getMemberWithUUID'],
    queryFn: getUserWithUUID,
    select: data => data.result,
  });
};
