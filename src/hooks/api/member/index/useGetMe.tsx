import { ApiResponse, http } from '@/API';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MemberDefaultInformationTypeWithUuid } from '@type/index';

interface MemberMeResponseDTO extends MemberDefaultInformationTypeWithUuid {}

const getMe = async (): Promise<ApiResponse<MemberMeResponseDTO>> => {
  const response = await http.get('/member/me');
  return response.data;
};

export default function useGetMe() {
  return useSuspenseQuery({
    queryKey: ['getMemberWithUUID'],
    queryFn: getMe,
    select: data => data.result,
  });
}
