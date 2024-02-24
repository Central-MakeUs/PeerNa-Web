import { queryClient } from '@/main';
import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { http } from '@utils/API';
import { useEffect } from 'react';

interface ErrorFallbackProps {
  handleClick?: () => void;
}

export default function ErrorFallback({ handleClick }: ErrorFallbackProps) {
  useEffect(() => {
    delete http.defaults.headers.common.Authorization;
    localStorage.clear();
    queryClient.clear();
  }, []);
  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center gap-2">
      <SvgIcon id="Error" width={64} height={64} color="primary" />
      <Typography variant="header02">에러가 발생했어요</Typography>
      <Typography variant="body01">페이지를 새로고침해주세요</Typography>
      {handleClick && (
        <div className="w-[200px]">
          <Button buttonSize="md" onClick={handleClick}>
            새로고침
          </Button>
        </div>
      )}
    </div>
  );
}
