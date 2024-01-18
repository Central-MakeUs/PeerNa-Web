export const LocalStorage = {
  MemberId: 'memberId',
  AccessToken: 'accessToken',
  RefreshToken: 'refreshToken',
};

export type LocalStorageKeyType = keyof typeof LocalStorage;
