import { QUERY_KEY } from '@constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponse, http } from '@utils/API';

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
    queryKey: [QUERY_KEY.USERNAME, uuid],
    queryFn: () => getUserName(uuid),
    select: data => data.result,
  });
}
