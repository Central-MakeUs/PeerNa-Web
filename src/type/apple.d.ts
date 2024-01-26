// script 추가 시 window 객체에 AppleID가 추가되므로 declare 키워드를 통해 추가해줍니다.
interface Window {
  AppleID: {
    auth: {
      init: (config: ClientConfig) => void;
      signIn: (config?: ClientConfig) => Promise<SigninResponse>;
    };
  };
}
