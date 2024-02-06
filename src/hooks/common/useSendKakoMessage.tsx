import { HOST_DEV, HOST_PROD, MODE } from '@constants';

type KakaoMessage = {
  title: string;
  description: string;
};

export default function useSendKakaoMessage() {
  const handleSendKakaoMessage = ({ title, description }: KakaoMessage) => {
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
          title: title,
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
