import { HOST_DEV, HOST_PROD, MODE } from '@constants';

type KakaoMessage = {
  title: string;
  description: string;
  buttonText: string;
};

export default function useSendKakaoMessage() {
  const handleSendKakaoMessage = ({
    title,
    description,
    buttonText,
  }: KakaoMessage) => {
    const url = MODE === 'development' ? HOST_DEV : HOST_PROD;
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        imageUrl: `${url}`,
        link: {
          webUrl: `${url}`,
          mobileWebUrl: `${url}`,
        },
      },
      buttons: [
        {
          title: buttonText,
          link: {
            webUrl: `${url}`,
            mobileWebUrl: `${url}`,
          },
        },
      ],
    });
  };

  return handleSendKakaoMessage;
}
