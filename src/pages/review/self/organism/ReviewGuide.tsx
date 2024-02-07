import SlideImage from '@components/animate/SlideImage';
import FixedCenter from '@components/wrapper/FixedCenter';
import { REVIEW_SELF_INTRODUCE_IMAGE_LIST } from '@constants/images';
import { Fragment } from 'react';

// TODO) 세라 브랜치와 병합 후 이미지 사용
export default function ReviewGuide() {
  return (
    <Fragment>
      <FixedCenter>
        <div className="w-full flex justify-center">
          <div className="max-w-[400px]">
            <SlideImage images={REVIEW_SELF_INTRODUCE_IMAGE_LIST} />
          </div>
        </div>
      </FixedCenter>
    </Fragment>
  );
}
