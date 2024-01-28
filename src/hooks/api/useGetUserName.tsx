import { http } from '@apis/index';
import { useSuspenseQuery } from '@tanstack/react-query';

type ApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
};

interface MemberUserNameResponseDTO {
  name: string;
}

export const getUserName = async (
  uuid: string,
): Promise<ApiResponse<MemberUserNameResponseDTO>> => {
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
