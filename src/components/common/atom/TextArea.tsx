import IconButton from '@components/common/atom/IconButton';
import {
  TextAreaProps as TextAreaPropsWithNextui,
  Textarea,
} from '@nextui-org/react';
import React, { useId } from 'react';

export interface TextAreaProps extends TextAreaPropsWithNextui {
  text: string;
  handleChangeText: (newText: string) => void;
}

function CustomTextArea(
  props: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) {
  const { text, handleChangeText, ...rest } = props;
  const inputId = useId();

  const handleClearText = () => handleChangeText('');

  return (
    <Textarea
      {...rest}
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
          onClick={handleClearText}
        />
      }
      onClear={handleClearText}
      onValueChange={handleChangeText}
    />
  );
}
const TextArea = React.forwardRef(CustomTextArea);
export default TextArea;
