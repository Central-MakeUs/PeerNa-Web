import { http } from '@utils/API';
import { getFcmToken } from '@utils/token';

export async function fcmInit() {
  return await http.post('/member/fcm-token', {
    fcmToken: getFcmToken(),
  });
}
