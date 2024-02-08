import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { REVIEW_REQUEST } from '@constants/images';
import useSendKakaoMessage from '@hooks/common/useSendKakoMessage';

export default function ReviewButton() {
  const handleSendKakaoMessage = useSendKakaoMessage();
  const title = '저는 어떤 동료인가요?';
  const description = '함께한 동료에 대해 알려주세요.';
  const buttonText = '피어 테스트 응답하기';
  const imagePath = REVIEW_REQUEST;

  return (
    <div className="mt-8 mb-10 w-full px-5 mx-auto">
      <button
        className="bg-primary100 rounded-xl w-full flex px-4 py-5 justify-between items-center"
        onClick={() =>
          handleSendKakaoMessage({ title, description, buttonText, imagePath })
        }
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
