import { AxiosResponse } from 'axios';
import { getProfileInfo } from '@apis/mypage';
import { useQuery } from '@tanstack/react-query';

interface ProfileResponse {
  code: number;
  message: string;
  result: ProfileInfo;
}

export interface ProfileInfo {
  name: string;
  job: string;
  part: string;
  oneLiner: string;
}

export const useProfileInfo = () => {
  const { data, error, isLoading, isError } = useQuery<ProfileInfo, Error>({
    queryKey: ['myProfileInfo'],
    queryFn: async () => {
      const response: AxiosResponse<ProfileResponse> = await getProfileInfo();

      if (!response.data) {
        throw new Error('오류발생!');
      }
      const responseData: ProfileInfo = response.data.result;
      return responseData;
    },
    staleTime: 60 * 60 * 1000,
  });

  return { data, error, isLoading, isError };
};
