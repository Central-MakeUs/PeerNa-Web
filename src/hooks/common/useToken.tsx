import { StorageKey } from '@constants/localStorage';
import { WebviewBridge } from '@utils/webview';
import { useState } from 'react';

export default function useToken() {
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem(StorageKey.AccessToken) || '',
  );
  const [refreshToken, setRefreshToken] = useState(
    () => localStorage.getItem(StorageKey.RefreshToken) || '',
  );

  const updateToken = (newAccessToken: string, newRefreshToken: string) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    localStorage.setItem(StorageKey.AccessToken, newAccessToken);
    localStorage.setItem(StorageKey.RefreshToken, newRefreshToken);
    WebviewBridge.postMessage({
      type: 'login',
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    });
  };

  const resetToken = () => {
    setAccessToken('');
    setRefreshToken('');
    localStorage.removeItem(StorageKey.AccessToken);
    localStorage.removeItem(StorageKey.RefreshToken);
  };

  return { accessToken, refreshToken, updateToken, resetToken };
}
