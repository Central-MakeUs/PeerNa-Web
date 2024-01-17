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

export default function Toaster({ children, ...props }: ToastProp) {
  return (
    <ToastProvider {...props}>
      <ToastWithShadcn>
        <SvgIcon id="Complete" width={16} height={16} color="gray07" />
        {children}
      </ToastWithShadcn>
      <ToastViewport />
    </ToastProvider>
  );
}
