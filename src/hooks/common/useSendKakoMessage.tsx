import { HOST_DEV, HOST_PROD, MODE } from '@constants';
import { PROJECT_REQUEST } from '@constants/images';

type KakaoMessage = {
  title: string;
  description: string;
  buttonText: string;
  imagePath: string;
};

export default function useSendKakaoMessage() {
  const handleSendKakaoMessage = ({
    title,
    description,
    buttonText,
    imagePath,
  }: KakaoMessage) => {
    const url = MODE === 'development' ? HOST_DEV : HOST_PROD;
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        imageUrl: PROJECT_REQUEST,
        link: {
          webUrl: imagePath,
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
