import IconButton from '@components/common/atom/IconButton';
import {
  TextAreaProps as TextAreaPropsWithNextui,
  Textarea,
} from '@nextui-org/react';
import { forwardRef, useId } from 'react';

export interface TextAreaProps extends TextAreaPropsWithNextui {
  text: string;
  handleChangeText: (newText: string) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ text, handleChangeText, ...props }, ref) => {
    const inputId = useId();

    const handleClearText = () => handleChangeText('');

    return (
      <Textarea
        {...props}
        ref={ref}
        classNames={{
          inputWrapper: '!h-full',
        }}
        type="text"
        isClearable
        minRows={3}
        maxRows={5}
        id={inputId}
        value={text}
        endContent={
          <IconButton
            iconProps={{
              id: 'Clear',
              color: 'gray04',
              className: 'bg-gray02 rounded-xl',
            }}
            onClick={() => undefined}
          />
        }
        onClear={handleClearText}
        onValueChange={handleChangeText}
      />
    );
  },
);

export default TextArea;
