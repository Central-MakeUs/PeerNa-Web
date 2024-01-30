/* eslint-disable @typescript-eslint/no-explicit-any */

import { setAccessToken, setFcmToken, setRefreshToken } from '@utils/token';

export class WebviewBridge {
  static postMessage({ type, data }: WebviewPostMessageRequestType) {
    if (
      navigator.userAgent.includes('iPhone') ||
      navigator.userAgent.includes('Android')
    ) {
      const webview = window.ReactNativeWebView;
      if (webview) {
        const message = JSON.stringify({ type, data });
        console.log(message);
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
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            setFcmToken(fcmToken);
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
