import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import {
  PEER_TEST_REQUEST,
  PEER_TEST_TITLE,
  PEER_TEST_URL,
} from '@constants/share';
import useGetMe from '@hooks/api/member/index/useGetMe';
import useShareLink from '@hooks/common/useShareLink';

export default function ReviewButton() {
  const { data } = useGetMe();

  const uuid = data ? data.uuid : '';
  const username = data ? data.name : '';

  const { handleSendKakaoMessage } = useShareLink();

  const handleKakaoShare = () => {
    handleSendKakaoMessage({
      ...PEER_TEST_REQUEST,
      title: PEER_TEST_TITLE(username),
      url: PEER_TEST_URL(uuid),
    });
  };

  return (
    <div className="mt-4 mb-8 px-4 w-full mx-auto">
      <button
        className="bg-primary100 rounded-xl w-full flex px-4 py-5 justify-between items-center"
        onClick={handleKakaoShare}
      >
        <div>
          <Typography variant="header03" fontColor="gray08" className="mb-1">
            나는 어떤 동료일까 궁금하다면?
          </Typography>
          <Typography variant="body03" fontColor="gray05" className="text-left">
            동료에게 피어 테스트 응답을 요청해보세요
          </Typography>
        </div>
        <SvgIcon id="ShareLink" color="gray07" />
      </button>
    </div>
  );
}
