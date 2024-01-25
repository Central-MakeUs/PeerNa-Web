import { Access_Token, Refresh_Token } from '@constants/localStorage';
import { WebviewBridge } from '@utils/webview';
import { useState } from 'react';

export default function useToken() {
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem(Access_Token) || '',
  );
  const [refreshToken, setRefreshToken] = useState(
    () => localStorage.getItem(Refresh_Token) || '',
  );

  const updateToken = (newAccessToken: string, newRefreshToken: string) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    localStorage.setItem(Access_Token, newAccessToken);
    localStorage.setItem(Refresh_Token, newRefreshToken);
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
    localStorage.removeItem(Access_Token);
    localStorage.removeItem(Refresh_Token);
  };

  return { accessToken, refreshToken, updateToken, resetToken };
}
