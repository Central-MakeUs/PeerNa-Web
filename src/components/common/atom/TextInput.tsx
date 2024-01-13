import IconButton from '@components/common/atom/IconButton';
import { Input, InputProps } from '@nextui-org/react';
import {
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
  useId,
  useState,
} from 'react';

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
  ({ text, handleChangeText, ...rest }, ref) => {
    const inputId = useId();
    const [inputText, setInputText] = useState<string>('');
    const handleChangeInputText = (newValue: string) => setInputText(newValue);
    const handleClear = () => setInputText('');

    useEffect(() => {
      if (text !== inputText) handleChangeText(inputText);
    }, [inputText, handleChangeInputText]);

    return (
      <Input
        ref={ref}
        type="text"
        isClearable
        id={inputId}
        value={inputText}
        endContent={
          <IconButton
            iconProps={{
              id: 'Clear',
              color: 'gray04',
              className: 'bg-gray02 rounded-xl',
            }}
            onClick={() => ''}
          />
        }
        onClear={handleClear}
        onValueChange={handleChangeInputText}
        {...rest}
      />
    );
  },
);

export default TextInput;
