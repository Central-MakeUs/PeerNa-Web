import ShakeBox from '@components/animate/ShakeBox';
import TextInput from '@components/common/atom/TextInput';
import Typography from '@components/common/atom/Typography';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import { Fragment } from 'react';

export default function InputName() {
  const { reviewSelf, isValidName, handleChangeName } = useReviewSelfState();

  return (
    <Fragment>
      <ShakeBox trigger={!isValidName}>
        <TextInput
          text={reviewSelf.name}
          handleChangeText={handleChangeName}
          placeholder="본명을 입력해주세요"
        />
      </ShakeBox>
      <div className="flex justify-end">
        <Typography
          variant="body02"
          className={isValidName ? 'text-gray06' : 'text-danger01'}
        >
          {`${reviewSelf.name.length}/5`}
        </Typography>
      </div>
    </Fragment>
  );
}
