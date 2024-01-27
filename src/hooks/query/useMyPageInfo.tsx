import { getMypageInfo } from '@apis/mypage';
import { useQuery } from '@tanstack/react-query';

export const useMyPageInfo = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['mypageInfo'],
    queryFn: getMypageInfo,
  });

  return { data: data?.result, error, isLoading, isError };
};
