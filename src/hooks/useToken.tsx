import { useState } from 'react';
import { LocalStorage } from '@constants/localStorage';

export default function useToken() {
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem(LocalStorage.AccessToken) || '',
  );
  const [refreshToken, setRefreshToken] = useState(
    () => localStorage.getItem(LocalStorage.RefreshToken) || '',
  );

  const updateToken = (newAccessToken: string, newRefreshToken: string) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    localStorage.setItem(LocalStorage.AccessToken, newAccessToken);
    localStorage.setItem(LocalStorage.RefreshToken, newRefreshToken);
  };

  const resetToken = () => {
    setAccessToken('');
    setRefreshToken('');
    localStorage.removeItem(LocalStorage.AccessToken);
    localStorage.removeItem(LocalStorage.RefreshToken);
  };

  return { accessToken, refreshToken, updateToken, resetToken };
}
