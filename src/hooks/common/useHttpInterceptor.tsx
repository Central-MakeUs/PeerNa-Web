import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@utils/token';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { useEffect } from 'react';

const useHttpInterceptor = (http: AxiosInstance) => {
  const { openModal } = useModal('login');
  const { replace } = useFlow();

  useEffect(() => {
    const requestInterceptor = http.interceptors.request.use(
      async config => {
        const accessToken = getAccessToken();
        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      error => Promise.reject(error),
    );

    const responseInterceptor = http.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
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

            const newRefreshToken = response.data.result.refreshToken;
            setRefreshToken(newRefreshToken);

            originalRequest.headers['Authorization'] =
              `Bearer ${newAccessToken}`;
            return http(originalRequest);
          } catch (refreshError) {
            removeRefreshToken();
            if (localStorage.getItem(UtilityKeys.IS_ONBOARD)) {
              openModal();
            } else {
              replace('OnboardingPage', { step: '1' });
            }
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      http.interceptors.request.eject(requestInterceptor);
      http.interceptors.response.eject(responseInterceptor);
    };
  }, [http]);
};

export default useHttpInterceptor;
