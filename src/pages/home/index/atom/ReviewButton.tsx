import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';

export default function ReviewButton() {
  const handleSendKakaoMessage = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      // 해당 content들은 모두 변경 예정
      content: {
        title: '평판 요청합니다',
        description: '평판을 작성해주세요!',
        imageUrl:
          'data:image/jpeg;base64,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',
        link: {
          webUrl: 'https://localhost:5173/',
          mobileWebUrl: 'https://localhost:5173/',
        },
      },
      buttons: [
        {
          title: '평판 작성하기',
          link: {
            webUrl: 'https://localhost:5173/',
            mobileWebUrl: 'https://localhost:5173/',
          },
        },
      ],
    });
  };
  return (
    <div className="mt-8 mb-10 max-w-[524px] mx-auto">
      <button
        className="bg-primary100 rounded-xl w-full flex px-4 py-5 justify-between items-center"
        onClick={handleSendKakaoMessage}
      >
        <div>
          <Typography variant="header03" fontColor="gray08" className="mb-1">
            나는 어떤 동료일까 궁금하다면?
          </Typography>
          <Typography variant="body03" fontColor="gray05" className="text-left">
            동료에게 피어 테스트 응답을 요청해보세요
          </Typography>
        </div>
        <SvgIcon id="IOSChevronRight" color="gray07" />
      </button>
    </div>
  );
}
