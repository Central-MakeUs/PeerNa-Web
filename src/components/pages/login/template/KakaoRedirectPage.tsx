import { postFcmToken } from '@apis/common';
import Spinner from '@components/common/atom/Spinner';
import { Member_Id } from '@constants/localStorage';
import useHistory from '@hooks/useHistory';
import { useFlow } from '@hooks/useStackFlow';
import useToken from '@hooks/useToken';
import { ActivityComponentType } from '@stackflow/react';
import { getFcmToken } from '@utils/token';
import { useEffect } from 'react';

interface AuthData {
  memberId: string;
  accessToken: string;
  refreshToken: string;
}

const KakaoRedirectpage: ActivityComponentType = () => {
  const { push } = useFlow();
  const { history } = useHistory();
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
      localStorage.setItem(Member_Id, memberId);
      updateToken(accessToken, refreshToken);
      push(history.activity, history.params);
    }

    const fcmToken = getFcmToken();
    if (fcmToken) {
      postFcmToken(fcmToken)
        .then(() => {
          console.log('success');
          alert('success');
        })
        .catch(error => {
          alert('error' + error.message);
        });
    }
  }, [memberId, accessToken, refreshToken]);

  return <Spinner />;
};

export default KakaoRedirectpage;
