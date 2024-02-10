import { getAccessToken } from '@utils/token';
import axios from 'axios';

export type ApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
};

export type InfiniteApiResponse<T = object> = {
  code: number;
  message: string;
  result: T[];
  pageRequestDto: {
    totalElements: number;
    currentPageElements: number;
    totalPage: number;
    isFirst: boolean;
    isLast: boolean;
  };
};

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

http.interceptors.request.use(async config => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});
