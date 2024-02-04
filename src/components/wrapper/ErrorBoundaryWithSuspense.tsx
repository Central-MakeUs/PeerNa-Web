import ErrorFallback from '@components/common/molecule/ErrorFallback';
import LoadingFallback from '@components/common/molecule/LoadingFallback';
import { PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface ErrorBoundaryWithSuspense {
  onReset: () => void;
}

export default function ErrorBoundaryWithSuspense({
  children,
  onReset,
}: PropsWithChildren<ErrorBoundaryWithSuspense>) {
  return (
    <ErrorBoundary
      onReset={onReset}
      fallbackRender={({ resetErrorBoundary }) => (
        <ErrorFallback handleClick={resetErrorBoundary} />
      )}
    >
      <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
