import { useState } from 'react';
import { Access_Token, Refresh_Token } from '@constants/localStorage';

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
  };

  const resetToken = () => {
    setAccessToken('');
    setRefreshToken('');
    localStorage.removeItem(Access_Token);
    localStorage.removeItem(Refresh_Token);
  };

  return { accessToken, refreshToken, updateToken, resetToken };
}
