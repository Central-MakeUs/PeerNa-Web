import SvgIcon from '@components/common/atom/SvgIcon';
import React from 'react';
import ProgressStep from '../atom/ProgressStep';
import ProgressTrack, { ProgressTrackProps } from '../atom/ProgressTrack';

export default function ProgressBar({
  step,
  maxStep,
  trackStep,
}: ProgressTrackProps) {
  return (
    /**
     * @description
     * [1, 2, 3, 4, 5]는 ProgressStep과 ProgressTrack의 연속적인 사용으로
     * 해당 배열의 값은 ProgressStep의 name으로도 사용하기 위함
     *
     * 마지막 5는 ProgressTrack에는 4개의 track이 필요하기 때문에 조건부 처리
     */

    <div className="flex justify-center items-center gap-1">
      {[1, 2, 3, 4, 5].map(order => (
        <React.Fragment key={order}>
          {order !== 5 ? (
            <div>
              <ProgressStep
                name={String(order)}
                step={step}
                complete={step === 4 && trackStep === 7}
              />
            </div>
          ) : (
            <div>
              <ProgressStep
                step={step}
                icon={
                  <SvgIcon
                    id="Check"
                    color="white"
                    width={11.75}
                    height={8.5}
                  />
                }
                complete={step === 4 && trackStep === 7}
              />
            </div>
          )}
          {order !== 5 && (
            <ProgressTrack
              step={step}
              maxStep={maxStep}
              trackStep={trackStep}
              order={order}
              barSize={'short'}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
