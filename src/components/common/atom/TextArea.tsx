import SvgIcon from '@assets/SvgIcon';
import {
  TextAreaProps as TextAreaPropsWithNextui,
  Textarea,
} from '@nextui-org/react';
import { forwardRef, useEffect, useId, useState } from 'react';

export interface TextAreaProps extends TextAreaPropsWithNextui {
  text: string;
  handleChangeText: (newText: string) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ text, handleChangeText, ...rest }, ref) => {
    const inputId = useId();
    const [inputText, setInputText] = useState<string>('');
    const handleChangeInputText = (newValue: string) => setInputText(newValue);
    const handleClear = () => {
      console.log('hello');
      setInputText('');
    };

    useEffect(() => {
      if (text !== inputText) handleChangeText(inputText);
    }, [inputText, handleChangeInputText]);

    return (
      <Textarea
        ref={ref}
        classNames={{
          inputWrapper: '!h-full',
        }}
        type="text"
        isClearable
        minRows={3}
        maxRows={5}
        id={inputId}
        value={inputText}
        endContent={
          <div onClick={handleClear}>
            <SvgIcon
              id="Clear"
              color="gray04"
              className="bg-gray02 rounded-xl"
            />
          </div>
        }
        onClear={handleClear}
        onValueChange={handleChangeInputText}
        {...rest}
      />
    );
  },
);

export default TextArea;
