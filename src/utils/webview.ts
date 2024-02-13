/* eslint-disable @typescript-eslint/no-explicit-any */

import { fcmInit } from '@utils/fcm';
import {
  getAccessToken,
  setAccessToken,
  setFcmToken,
  setRefreshToken,
} from '@utils/token';
import toast from 'react-hot-toast';

export class WebviewBridge {
  static postMessage({ type, data }: WebviewPostMessageRequestType) {
    if (
      navigator.userAgent.includes('iPhone') ||
      navigator.userAgent.includes('Android')
    ) {
      const webview = window.ReactNativeWebView;
      if (webview) {
        const message = JSON.stringify({ type, data });
        webview.postMessage(message);
      }
    } else {
      return;
    }
  }

  static registerMessageListener() {
    const global = navigator.userAgent.includes('iPhone') ? window : document;
    global.addEventListener('message', event => {
      const messageEvent = event as MessageEvent;
      try {
        const message: WebviewMessageEventResponseType = JSON.parse(
          messageEvent.data,
        );
        switch (message.type) {
          case 'init':
            // eslint-disable-next-line no-case-declarations
            const { accessToken, refreshToken, fcmToken } = message.data;
            setAccessToken(JSON.parse(accessToken ?? ''));
            setRefreshToken(JSON.parse(refreshToken ?? ''));
            setFcmToken(JSON.parse(fcmToken ?? ''));
            // 로그인된 유저만 fcmInit
            if (getAccessToken()) fcmInit();
            break;
          case 'alarm':
            toast.success('새로운 알림이 있어요');
            break;
          case 'save-card':
            toast.success('이미지가 저장됐어요!');
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    });
  }
}

type WebviewPostMessageRequestType = {
  type: string;
  data: any;
};

type WebviewMessageEventResponseType = {
  type: string;
  data: any;
};
