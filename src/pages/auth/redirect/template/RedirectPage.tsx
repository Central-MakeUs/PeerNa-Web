import Spinner from '@components/common/atom/Spinner';
import { StorageKey } from "@constants/localStorage";
import useHistory from '@hooks/common/useHistory';
import { useFlow } from '@hooks/common/useStackFlow';
import useToken from '@hooks/common/useToken';
import { ActivityComponentType } from '@stackflow/react';
import { getFcmToken } from '@utils/token';
import { useEffect } from 'react';

interface AuthData {
  memberId: string;
  accessToken: string;
  refreshToken: string;
}

const RedirectPage: ActivityComponentType = () => {
  const { push } = useFlow();
  const { history, handleClearHistory } = useHistory();
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
      localStorage.setItem(StorageKey.MemberId, memberId);
      updateToken(accessToken, refreshToken);

      const { activity, params } = history;
      handleClearHistory();
      push(String(activity), params);
    }
    const fcmToken = getFcmToken();
    // TODO: FCM API 등록
    if (fcmToken) {
      return;
    }
  }, [memberId, accessToken, refreshToken]);

  return <Spinner />;
};

export default RedirectPage;
