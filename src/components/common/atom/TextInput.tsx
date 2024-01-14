import IconButton from '@components/common/atom/IconButton';
import { Input, InputProps } from '@nextui-org/react';
import { ComponentPropsWithRef, forwardRef, useId } from 'react';

type InputWithoutSpecificProps = Omit<
  ComponentPropsWithRef<'input'>,
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

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ text, handleChangeText, ...props }, ref) => {
    const inputId = useId();

    const handleClearText = () => handleChangeText('');

    return (
      <Input
        {...props}
        ref={ref}
        type="text"
        isClearable
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

export default TextInput;
