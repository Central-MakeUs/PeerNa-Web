import { http } from '@apis/index';

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

export const postFcmToken = async (fcmToken: string) => {
  return http.post('/test/fcm', { fcmToken });
};
