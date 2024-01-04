import { useId, forwardRef, ComponentPropsWithRef } from 'react';
import ClearIcon from '../../../assets/icons/clear.svg?react';

export interface TextInputProps extends ComponentPropsWithRef<'input'> {
  labelText: string;
  text: string;
  onClear: () => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ labelText, text, onClear, ...rest }, ref) => {
    const inputId = useId();

    return (
      <div className="flex items-center">
        <label htmlFor={inputId} className="sr-only">
          {labelText}
        </label>
        <input
          id={inputId}
          type="text"
          ref={ref}
          className={`w-input01 p-4 border-1 border-gray02
             focus:outline-none bg-gray01 text-gray08 text-body01 placeholder-gray04 rounded-default`}
          {...rest}
        />
        {text && (
          <ClearIcon className="-ml-8 cursor-pointer" onClick={onClear} />
        )}
      </div>
    );
  },
);

export default TextInput;
