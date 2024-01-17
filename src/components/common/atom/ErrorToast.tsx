import {
  Toast as ToastWithShadcn,
  ToastProps as ToasPropsWithShadcn,
  ToastProvider,
  ToastViewport,
} from '@components/shadcn/toast';
import SvgIcon from '@components/common/atom/SvgIcon';

interface ToastProp extends ToasPropsWithShadcn {
  children: React.ReactNode;
}

export default function ErrorToast({ children, ...props }: ToastProp) {
  return (
    <ToastProvider>
      <ToastWithShadcn {...props}>
        <SvgIcon id="Error" width={20} height={20} color="danger01" />
        {children}
      </ToastWithShadcn>
      <ToastViewport className="!w-[208px]" />
    </ToastProvider>
  );
}
