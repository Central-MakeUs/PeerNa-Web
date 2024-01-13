import IconButton from '@components/common/atom/IconButton';
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
    const handleClear = () => setInputText('');

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
          <IconButton
            iconProps={{
              id: 'Clear',
              color: 'gray04',
              className: 'bg-gray02 rounded-xl',
            }}
            onClick={handleClear}
          />
        }
        onClear={handleClear}
        onValueChange={handleChangeInputText}
        {...rest}
      />
    );
  },
);

export default TextArea;
