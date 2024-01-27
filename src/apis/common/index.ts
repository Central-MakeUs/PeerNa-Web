import { http } from '@apis/index';
import { AxiosError } from 'axios';

// 서버가 정상인지 확인하는 테스트 api
export const getHealthCheck = async () => {
  try {
    const response = await http.get('/health');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 서버가 POST 요청을 수신하는지 확인하는 테스트 api
// body에 peerna라고 보내면 에러가 반환된다.
export const getPostHealthCheck = async () => {
  const response = await http.post('/ping', {
    body: 'peerna',
  });
  return response.data;
};

export const api = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const response = await http.get(url);
      return response.data;
    } catch (error) {
      throw (error as AxiosError).response;
    }
  },

  post: async (url: string, body: unknown) => {
    try {
      const response = await http.post(url, body);
      return response.data;
    } catch (error) {
      throw (error as AxiosError).response;
    }
  },

  patch: async (url: string, body: unknown) => {
    try {
      const response = await http.patch(url, body);
      return response.data;
    } catch (error) {
      throw (error as AxiosError).response;
    }
  },

  delete: async (url: string) => {
    try {
      const response = await http.delete(url);
      return response;
    } catch (error) {
      throw (error as AxiosError).response;
    }
  },
};
