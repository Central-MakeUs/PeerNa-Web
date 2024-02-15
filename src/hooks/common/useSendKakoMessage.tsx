import SvgIcon from '@components/common/atom/SvgIcon';
import { HOST_DEV, HOST_PROD, MODE } from '@constants';
import toast from 'react-hot-toast';

type KakaoMessage = {
  title: string;
  description: string;
  buttonText: string;
  imagePath?: string;
  url: string;
};

type ShareLink = {
  type: 'peerTest' | 'project';
  id?: number;
  uuid?: string;
};

const baseUrl = MODE === 'development' ? HOST_DEV : HOST_PROD;

export const PEER_TEST_URL = (uuid: string) =>
  baseUrl + `/review/peer/?uuid=${uuid}`;

export const PROJECT_URL = (id: number) => baseUrl + `/project/${id}/propose`;

export default function useSendKakaoMessage() {
  const handleSendKakaoMessage = ({
    title,
    description,
    buttonText,
    imagePath,
    url,
  }: KakaoMessage) => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        imageUrl: imagePath,
        link: {
          webUrl: imagePath,
          mobileWebUrl: url,
        },
      },
      buttons: [
        {
          title: buttonText,
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
      ],
    });
  };

  const handleClickShareLink = async ({ type, id, uuid }: ShareLink) => {
    try {
      let copyLink = '';
      if (type === 'peerTest' && uuid) {
        copyLink = PEER_TEST_URL(uuid);
      }
      if (type === 'project' && id) copyLink = PROJECT_URL(id);
      await navigator.clipboard.writeText(copyLink);
      toast.success('링크 복사 완료!', {
        icon: <SvgIcon id="Complete" color="gray08" />,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return { handleSendKakaoMessage, handleClickShareLink };
}
