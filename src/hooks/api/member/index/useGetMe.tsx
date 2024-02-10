import { UtilityKeys } from '@constants/localStorage';
import { QUERY_KEY } from '@constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { JobType, PartType } from '@type/enums';
import { MemberDefaultInformationTypeWithUuid } from '@type/index';
import { ApiResponse, http } from '@utils/API';

export interface MemberMeResponseDTO
  extends MemberDefaultInformationTypeWithUuid {}

const getMe = async (): Promise<ApiResponse<MemberMeResponseDTO>> => {
  const isOnboarding = localStorage.getItem(UtilityKeys.IS_ONBOARD);
  if (!isOnboarding)
    return {
      code: 0,
      message: '',
      result: {
        name: '',
        uuid: '',
        job: JobType.ENTREPRENEUR,
        part: PartType.BACK_END,
        oneLiner: '',
      },
    };
  const response = await http.get('/member/me');
  return response.data;
};

export default function useGetMe() {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.MEMBER_ME],
    queryFn: getMe,
    select: data => data.result,
  });
}
