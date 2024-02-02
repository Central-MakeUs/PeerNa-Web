import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  setAccessToken,
} from '@utils/token';
import axios, { AxiosError, AxiosResponse } from 'axios';

export type ApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
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
  // TODO: authorization logic
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

const onFulfilled = (response: AxiosResponse) => {
  return response;
};

const onRejected = async (error: AxiosError) => {
  // TODO: error handle logic
  console.error(error);
  const originalRequest = error.config;
  console.log(originalRequest?.url);
  if (!originalRequest) return Promise.reject(error);
  if (
    error.response?.status === 401 &&
    !originalRequest.url?.includes('/member/new-token')
  ) {
    delete http.defaults.headers.common['Authorization'];
    removeAccessToken();

    try {
      const response = await http.post('/member/new-token', {
        refreshToken: getRefreshToken(),
      });

      const newAccessToken = response.data.result.accessToken;
      setAccessToken(newAccessToken);

      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      return http(originalRequest);
    } catch (refreshError) {
      console.error(refreshError);
    }
  }

  return Promise.reject(error);
};

http.interceptors.response.use(onFulfilled, onRejected);
