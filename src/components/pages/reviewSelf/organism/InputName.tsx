import ShakeBox from '@components/animate/ShakeBox';
import TextInput from '@components/common/atom/TextInput';
import Typography from '@components/common/atom/Typography';
import useReviewSelfState from '@hooks/useReviewSelfState';

export default function InputName() {
  const { , isValidName, handleChangeName } = useReviewSelfState();

  return (
    <div className="w-full flex flex-col gap-2">
      <ShakeBox trigger={!isValidName}>
        <TextInput
          text={selfTest.name}
          handleChangeText={handleChangeName}
          placeholder="본명을 입력해주세요"
        />
      </ShakeBox>
      <div className="flex justify-end">
        <Typography
          variant="body02"
          className={isValidName ? 'text-gray06' : 'text-danger01'}
        >
          {selfTest.name.length}/5
        </Typography>
      </div>
    </div>
  );
}
