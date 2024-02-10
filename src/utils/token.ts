import { StorageKey } from '@constants/localStorage';

export const getAccessToken = () =>
  localStorage.getItem(StorageKey.AccessToken);
export const setAccessToken = (accessToken: string) =>
  localStorage.setItem(StorageKey.AccessToken, accessToken);
export const removeAccessToken = () => {
  localStorage.removeItem(StorageKey.AccessToken);
};

export const getRefreshToken = () =>
  localStorage.getItem(StorageKey.RefreshToken);
export const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem(StorageKey.RefreshToken, refreshToken);
export const removeRefreshToken = () =>
  localStorage.removeItem(StorageKey.RefreshToken);

export const getFcmToken = () => localStorage.getItem(StorageKey.FcmToken);
export const setFcmToken = (fcmToken: string) =>
  localStorage.setItem(StorageKey.FcmToken, fcmToken);
export const removeFcmToken = () =>
  localStorage.removeItem(StorageKey.FcmToken);
