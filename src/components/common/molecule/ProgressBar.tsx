import React from 'react';
import ProgressTrack from '../atom/ProgressTrack';
import ProgressStep from '../atom/ProgressStep';
import SvgIcon from '@assets/SvgIcon';

interface ProgressBarProps {
  level: number;
  step: number;
  stepArray: number[];
}

const ProgressBar = ({ step, level, stepArray }: ProgressBarProps) => {
  return (
    <div className="flex items-center gap-1">
      {stepArray.map(order => (
        <React.Fragment key={order}>
          {order !== 5 ? (
            <ProgressStep name={String(order)} level={level} />
          ) : (
            <ProgressStep
              level={level}
              icon={<SvgIcon id="Check" width={11.75} height={8.5} />}
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
