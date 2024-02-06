import a from '@assets/common/bg_gradient.png';
import SlideImage from '@components/animate/SlideImage';
import FixedCenter from '@components/wrapper/FixedCenter';

// TODO) 세라 브랜치와 병합 후 이미지 사용
export default function ReviewGuide() {
  return (
    <div className="w-full flex flex-col gap-4">
      <FixedCenter>
        <div className="w-full flex justify-center">
          <div className="max-w-[400px]">
            <SlideImage images={[a, a, a, a]} />
          </div>
        </div>
      </FixedCenter>
    </div>
  );
}
