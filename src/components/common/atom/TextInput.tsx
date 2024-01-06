import {
  useId,
  forwardRef,
  ComponentPropsWithRef,
  useState,
  useEffect,
} from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { ReactComponent as ClearIcon } from '@assets/icons/clear.svg';

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

export interface TextInputProps extends InputProps, InputWithoutSpecificProps {
  text: string;
  labelText: string;
  handleChangeText: (newText: string) => void;
}

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
