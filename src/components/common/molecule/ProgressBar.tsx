import React from 'react';
import ProgressTrack from '../atom/ProgressTrack';
import ProgressStep from '../atom/ProgressStep';
import SvgIcon from '@components/common/atom/SvgIcon';

interface ProgressBarProps {
  level: number;
  step: number;
}

const ProgressBar = ({ step, level }: ProgressBarProps) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(order => (
        <React.Fragment key={order}>
          {order !== 5 ? (
            <ProgressStep name={String(order)} level={level} />
          ) : (
            <ProgressStep
              level={level}
              step={step}
              icon={<SvgIcon id="check" width={11.75} height={8.5} />}
            />
          )}
          {order !== 5 && (
            <ProgressTrack
              level={level}
              step={step}
              order={order}
              barSize={'short'}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
