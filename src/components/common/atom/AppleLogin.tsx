import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { MouseEvent } from 'react';

const AppleLogin = () => {
  const loginWithApple = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    window.AppleID.auth.init({
      clientId: 'com.peerna.service',
      scope: 'email',
      redirectURI: 'https://dev.peerna.me/member/login/oauth2/apple',
      usePopup: false,
    });

    try {
      await window.AppleID.auth.signIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="w-full h-[45px] flex justify-center items-center bg-black rounded-sm"
      onClick={loginWithApple}
    >
      <SvgIcon id="Apple" color="white" />
      <Typography
        variant="body02"
        className="!text-[15px] !pt-[11px] !pb-[10px] text-white"
      >
        Apple 로그인
      </Typography>
    </button>
  );
};

export default AppleLogin;
