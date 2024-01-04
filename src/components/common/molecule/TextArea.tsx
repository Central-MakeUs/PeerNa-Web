import { useId, forwardRef, ComponentPropsWithRef } from 'react';
import ClearIcon from '../../../assets/icons/clear.svg?react';
import { Width } from '@constants/styles';

export interface TextAreaProps extends ComponentPropsWithRef<'textarea'> {
  labelText: string;
  text: string;
  onClear: () => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ labelText, text, onClear, ...rest }, ref) => {
    const inputId = useId();

    return (
      <div className="flex items-start">
        <label htmlFor={inputId} className="sr-only">
          {labelText}
        </label>
        <textarea
          id={inputId}
          ref={ref}
          className={`
          w-[${Width['input01']}] h-xl text-gray08 p-4 border-1 
            border-gray02 resize-none focus:outline-none bg-gray01 rounded-default placeholder-gray04 hover:bg-gray01`}
          {...rest}
        />
        {text && (
          <ClearIcon className="-ml-8 my-4 cursor-pointer" onClick={onClear} />
        )}
      </div>
    );
  },
);

export default TextArea;
