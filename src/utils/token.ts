import { Access_Token, Refresh_Token } from '@constants/localStorage';

export const getAccessToken = () => localStorage.getItem(Access_Token);
export const getRefreshToken = () => localStorage.getItem(Refresh_Token);
export const setAccessToken = (accessToken: string) =>
  localStorage.setItem(Access_Token, JSON.stringify(accessToken));
export const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem(Refresh_Token, JSON.stringify({ refreshToken }));
