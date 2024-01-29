import { http, ApiResponse } from '@apis/index';
import { useSuspenseQuery } from '@tanstack/react-query';

interface MemberUserNameDTO {
  name: string;
}

export const getUserName = async (
  uuid: string,
): Promise<ApiResponse<MemberUserNameDTO>> => {
  const response = await http.get(`/member/name?uuid=${uuid}`);
  return response.data;
};

export const useGetUserName = (uuid: string) => {
  return useSuspenseQuery({
    queryKey: ['getUserName', uuid],
    queryFn: () => getUserName(uuid),
    select: data => data.result,
  });
};
