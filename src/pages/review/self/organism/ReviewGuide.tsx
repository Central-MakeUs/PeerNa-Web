import FixedCenter from '@components/wrapper/FixedCenter';
import { ONBOARDING_CAROUSEL } from '@constants/images';
import Lottie from 'lottie-react';
import { Fragment } from 'react';

// TODO) 세라 브랜치와 병합 후 이미지 사용
export default function ReviewGuide() {
  return (
    <Fragment>
      <FixedCenter>
        <div className="w-full flex justify-center">
          <div className="max-w-[400px] p-1">
            <Lottie animationData={ONBOARDING_CAROUSEL} loop autoPlay />
          </div>
        </div>
      </FixedCenter>
    </Fragment>
  );
}
