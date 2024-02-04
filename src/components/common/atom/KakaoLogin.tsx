import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { AUTH_URL } from '@constants/auth';

const KakaoLogin = () => {
  const kakaoLogin = () => {
    window.location.href = AUTH_URL;
  };

  return (
    <button
      className="w-full h-[45px] flex justify-center items-center bg-[#FEE500] rounded-sm"
      onClick={kakaoLogin}
    >
      <SvgIcon id="Kakao" />
      <Typography
        variant="body02"
        className="!text-[15px] !pt-[11px] !pb-[10px] !font-700 text-black"
      >
        카카오 로그인
      </Typography>
    </button>
  );
};

export default KakaoLogin;
