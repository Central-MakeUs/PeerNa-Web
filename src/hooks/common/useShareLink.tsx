import SvgIcon from '@components/common/atom/SvgIcon';
import { PEER_TEST_URL, PROJECT_URL } from '@constants/share';
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

export default function useShareLink() {
  const handleSendKakaoMessage = ({
    title,
    description,
    buttonText,
    imagePath,
    url,
  }: KakaoMessage): void => {
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

  const handleShareLink = async ({ type, id, uuid }: ShareLink) => {
    try {
      let copyLink = '';
      if (type === 'peerTest' && uuid) copyLink = PEER_TEST_URL(uuid);
      if (type === 'project' && id) copyLink = PROJECT_URL(id);
      await navigator.clipboard.writeText(copyLink);
      toast.success('링크 복사 완료!', {
        icon: <SvgIcon id="Complete" color="gray08" />,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return { handleSendKakaoMessage, handleShareLink };
}
