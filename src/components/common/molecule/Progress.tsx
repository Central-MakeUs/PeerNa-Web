import React from 'react';
import ProgressBar from '../atom/ProgressBar';
import Indicator from '../atom/Indicator';
import SvgIcon from '@components/common/atom/SvgIcon';

interface ProgressProps {
  level: number;
  step: number;
}

const Progress = ({ step = 2, level = 3 }: ProgressProps) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(order => (
        <React.Fragment key={order}>
          {order !== 5 ? (
            <Indicator name={String(order)} level={level} />
          ) : (
            <Indicator level={level} step={step} icon={<SvgIcon id="home" />} />
          )}
          {order !== 5 && (
            <ProgressBar
              barSize="short"
              level={level}
              step={step}
              order={order}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Progress;
