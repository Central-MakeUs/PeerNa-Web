/* eslint-disable @typescript-eslint/no-explicit-any */

import { setIsApp, setPadding } from '@utils';
import { fcmInit } from '@utils/fcm';
import {
  getAccessToken,
  setAccessToken,
  setFcmToken,
  setRefreshToken,
} from '@utils/token';
import toast from 'react-hot-toast';

export class WebviewBridge {
  static messageEventListener: ((event: Event) => void) | null = null;

  static postMessage({ type, data }: WebviewPostMessageRequestType) {
    if (
      navigator.userAgent.includes('iPhone') ||
      navigator.userAgent.includes('Android')
    ) {
      const webview = (window as any).ReactNativeWebView;
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

    WebviewBridge.messageEventListener = (event: Event) => {
      const messageEvent = event as MessageEvent;
      try {
        const message: WebviewMessageEventResponseType = JSON.parse(
          messageEvent.data,
        );
        switch (message.type) {
          case 'init':
            setIsApp();
            // eslint-disable-next-line no-case-declarations
            const { accessToken, refreshToken, fcmToken, padding } =
              message.data;
            setPadding(padding);
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
        console.error('메시지 파싱 에러:', error);
      }
    };

    global.addEventListener('message', WebviewBridge.messageEventListener);
  }

  static removeMessageListener() {
    const global = navigator.userAgent.includes('iPhone') ? window : document;
    if (WebviewBridge.messageEventListener) {
      global.removeEventListener('message', WebviewBridge.messageEventListener);
      WebviewBridge.messageEventListener = null;
    }
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
