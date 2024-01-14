import axios, { AxiosResponse } from 'axios';

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
  return config;
});

const onFulfilled = (response: AxiosResponse) => {
  return response;
};

const onRejected = (error: unknown) => {
  // TODO: error handle logic
  console.error(error);
};

http.interceptors.response.use(onFulfilled, onRejected);
