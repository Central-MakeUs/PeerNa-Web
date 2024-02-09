/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  Kakao: any;
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
}
