interface Window {
  Kakao: any;
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
}
