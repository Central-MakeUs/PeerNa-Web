import Spinner from '@components/common/atom/Spinner';
import { ActivityTypes } from '@constants/activities';
import { StorageKey, UtilityKeys } from '@constants/localStorage';
import usePostReviewUpdateMemberId from '@hooks/api/review/index/usePostUpdateMemberId';
import useHistory from '@hooks/common/useHistory';
import { useFlow } from '@hooks/common/useStackFlow';
import useToken from '@hooks/common/useToken';
import { ActivityComponentType } from '@stackflow/react';
import { getAccessToken } from '@utils/token';
import { useEffect } from 'react';

interface AuthData {
  memberId: string;
  accessToken: string;
  refreshToken: string;
}

const RedirectPage: ActivityComponentType = () => {
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

  const { mutate } = usePostReviewUpdateMemberId();
  const { activity, params: historyParams } = history;

  useEffect(() => {
    if (getAccessToken()) {
      push(String(activity) as ActivityTypes, historyParams);
    }

    if (memberId && accessToken && refreshToken) {
      localStorage.setItem(StorageKey.MemberId, memberId);
      updateToken(accessToken, refreshToken);

      const uuid = localStorage.getItem(UtilityKeys.UUID);
      if (uuid) {
        mutate(uuid, {
          onSuccess: () => localStorage.removeItem(UtilityKeys.UUID),
        });
      }

      push(String(activity) as ActivityTypes, params);
    }
  }, [memberId, accessToken, refreshToken]);

  return <Spinner />;
};

export default RedirectPage;
