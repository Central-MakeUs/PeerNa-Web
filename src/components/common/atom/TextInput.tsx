import {
  useId,
  forwardRef,
  ComponentPropsWithRef,
  useState,
  useEffect,
} from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { ClearIcon } from '@assets/icons';

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
        endContent={<ClearIcon />}
        onClear={handleClear}
        onValueChange={handleChangeInputText}
        {...rest}
      />
    );
  },
);

export default TextInput;
