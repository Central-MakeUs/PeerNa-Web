import { QUERY_KEY } from '@constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponse, http } from '@utils/API';

interface MemberUserNameRequestDTO {
  uuid?: string;
  memberId?: string;
}

interface MemberUserNameDTO {
  name: string;
}

const getUserName = async ({
  uuid,
  memberId,
}: MemberUserNameRequestDTO): Promise<ApiResponse<MemberUserNameDTO>> => {
  if (uuid) {
    const response = await http.get(`/member/name?uuid=${uuid}`);
    return response.data;
  }
  const response = await http.get(`/review/request/${memberId}`);
  return response.data;
};

export default function useGetUserName(uuid?: string, memberId?: string) {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.USERNAME, uuid, memberId],
    queryFn: () => getUserName({ uuid, memberId }),
    select: data => data.result,
  });
}
