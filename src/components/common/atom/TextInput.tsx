import IconButton from '@components/common/atom/IconButton';
import { Input, InputProps } from '@nextui-org/react';
import React, { useId } from 'react';

type InputWithoutSpecificProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  | 'color'
  | 'defaultValue'
  | 'onBlur'
  | 'onFocus'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'size'
  | 'type'
  | 'value'
>;

type AdditionalTextInputProps = {
  text: string;
  handleChangeText: (newText: string) => void;
};

export interface TextInputProps
  extends InputWithoutSpecificProps,
    InputProps,
    AdditionalTextInputProps {}

function CustomTextInput(
  { text, handleChangeText, ...rest }: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const inputId = useId();

  const handleClearText = () => handleChangeText('');

  return (
    <Input
      {...rest}
      ref={ref}
      type="text"
      isClearable
      id={inputId}
      value={text}
      classNames={{
        clearButton: '!h-[24px] box-content',
        innerWrapper: '!pb-0',
      }}
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

const TextInput = React.forwardRef(CustomTextInput);
export default TextInput;
