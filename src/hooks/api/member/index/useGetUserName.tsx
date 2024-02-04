import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponse, http } from 'API';

interface MemberUserNameDTO {
  name: string;
}

const getUserName = async (
  uuid: string,
): Promise<ApiResponse<MemberUserNameDTO>> => {
  const response = await http.get(`/member/name?uuid=${uuid}`);
  return response.data;
};

export default function useGetUserName(uuid: string) {
  return useSuspenseQuery({
    queryKey: ['getUserName', uuid],
    queryFn: () => getUserName(uuid),
    select: data => data.result,
  });
}
