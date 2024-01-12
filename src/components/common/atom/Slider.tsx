import { FontVariantsClassName, Palette } from '@constants/styles';
import {
  SliderProps as SliderPropsWithNextui,
  Slider as SliderWithNextui,
} from '@nextui-org/react';

interface SliderProps extends SliderPropsWithNextui {}

const Slider = ({ ...props }: SliderProps) => {
  return (
    <SliderWithNextui
      {...props}
      showTooltip
      tooltipProps={{
        className: `bg-gray07 text-white ${FontVariantsClassName.body01}`,
        classNames: {
          base: 'before:bg-gray07',
        },
      }}
      step={10}
      minValue={0}
      maxValue={100}
      marks={[
        { value: 0, label: '0%' },
        { value: 100, label: '100%' },
      ]}
      classNames={{
        mark: 'mt-4',
      }}
      renderThumb={thumbProps => (
        <div
          {...thumbProps}
          className={`group p-3 top-1/2 bg-primary100 border-1 border-[${Palette.primary}] shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing`}
        >
          <span className="transition-transform bg-primary shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
        </div>
      )}
    />
  );
};

export default Slider;
