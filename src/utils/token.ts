import {
  Access_Token,
  Fcm_Token,
  Refresh_Token,
} from '@constants/localStorage';

export const getAccessToken = () => localStorage.getItem(Access_Token);
export const setAccessToken = (accessToken: string) =>
  localStorage.setItem(Access_Token, JSON.stringify(accessToken));
export const removeAccessToken = () => {
  localStorage.removeItem(Access_Token);
};

export const getRefreshToken = () => localStorage.getItem(Refresh_Token);
export const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem(Refresh_Token, JSON.stringify({ refreshToken }));
export const removeRefreshToken = () => localStorage.removeItem(Refresh_Token);

export const getFcmToken = () => localStorage.getItem(Fcm_Token);
export const setFcmToken = (fcmToken: string) =>
  localStorage.setItem(Fcm_Token, JSON.stringify({ fcmToken }));
export const removeFcmToken = () => localStorage.removeItem(Fcm_Token);
