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
        imageUrl: 'https://localhost:5173/',
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
