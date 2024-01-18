import { ActivityComponentType } from '@stackflow/react';
import { useFlow } from '@hooks/useStackFlow';
import Spinner from '@components/common/atom/Spinner';
import useToken from '@hooks/useToken';
import { LocalStorage } from '@constants/localStorage';
import { useEffect } from 'react';

interface AuthData {
  memberId: string;
  accessToken: string;
  refreshToken: string;
}

const Redirect: ActivityComponentType = () => {
  const { replace } = useFlow();
  const { updateToken } = useToken();

  const url = window.location.search;
  const params: URLSearchParams = new URLSearchParams(url);

  const { memberId, accessToken, refreshToken }: AuthData = {
    memberId: params.get('memberId') || '',
    accessToken: params.get('accessToken') || '',
    refreshToken: params.get('refreshToken') || '',
  };

  useEffect(() => {
    if (memberId && accessToken && refreshToken) {
      localStorage.setItem(LocalStorage.MemberId, memberId);
      updateToken(accessToken, refreshToken);
      replace('Home', {});
    }
  }, [memberId, accessToken, refreshToken]);

  return <Spinner />;
};

export default Redirect;
