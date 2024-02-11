import { UtilityKeys } from '@constants/localStorage';
import { QUERY_KEY } from '@constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { MemberDefaultInformationTypeWithUuid } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { getAccessToken } from '@utils/token';

export interface MemberMeResponseDTO
  extends MemberDefaultInformationTypeWithUuid {}

const getMe = async (): Promise<ApiResponse<MemberMeResponseDTO>> => {
  const response = await http.get('/member/me');
  return response.data;
};

export default function useGetMe() {
  const isOnboarding = localStorage.getItem(UtilityKeys.IS_ONBOARD);
  const hasToken = getAccessToken();

  return useQuery({
    queryKey: [QUERY_KEY.MEMBER_ME],
    queryFn: getMe,
    select: data => data.result,
    enabled: !isOnboarding && !!hasToken,
  });
}
