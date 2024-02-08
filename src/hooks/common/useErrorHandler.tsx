import { ModalStateType, modalState } from '@store/modal';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';

interface ErrorStatus {
  code: number;
  message: string;
}

export default function useErrorHandler() {
  const setModalState = useSetRecoilState(modalState);

  const handleError = (error: Error) => {
    if (axios.isAxiosError(error)) {
      const status = error?.response?.data as ErrorStatus;
      const errorCode = status.code;
      const errorMessage = status.message;

      switch (errorCode) {
        case 4007:
        case 4008:
        case 4009:
        case 4010:
        case 4011:
        case 5000:
          toast.error(errorMessage);
          setModalState((prevState: ModalStateType) => ({
            ...prevState,
            login: true,
          }));
          break;
        default:
          toast.error('알 수 없는 에러가 발생했습니다');
          break;
      }
    }
  };

  return { handleError };
}
