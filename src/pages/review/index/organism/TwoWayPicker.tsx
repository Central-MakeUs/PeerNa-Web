import SlideBox from '@components/animate/SlideBox';
import Picker from '@components/common/atom/Picker';
import { REVIEW_PICKER } from '@constants/review';
import useReviewState from '@hooks/useReviewState';
import { useCallback, useState } from 'react';

interface TwoWayPicker {
  curStep: number;
  answerStep: number;
  handleClickNextStep: () => void;
}

export default function TwoWayPicker({
  curStep,
  answerStep,
  handleClickNextStep,
}: TwoWayPicker) {
  const { handleAddAnswers } = useReviewState();

  const [isClickDisabled, setIsClickDisabled] = useState(false);

  const debounceClick = useCallback(
    (answer: number) => {
      if (!isClickDisabled) {
        setIsClickDisabled(true);
        handleClick(answer);
        setTimeout(() => setIsClickDisabled(false), 500);
      }
    },
    [isClickDisabled],
  );

  const handleClick = (answer: number) => {
    handleClickNextStep();
    handleAddAnswers(answer);
  };

  function getAnswerPosition(answer: string): number {
    let position = 1;

    for (const key in REVIEW_PICKER) {
      if (Object.prototype.hasOwnProperty.call(REVIEW_PICKER, key)) {
        const answersArray = REVIEW_PICKER[key];
        for (const item of answersArray) {
          if (item === answer) return position;
          position++;
        }
      }
    }

    return -1;
  }

  return (
    <SlideBox trigger={answerStep}>
      <div className="w-full flex justify-center gap-2">
        <Picker
          onClick={() => {
            debounceClick(
              getAnswerPosition(REVIEW_PICKER[curStep][answerStep - 1]),
            );
          }}
        >
          {REVIEW_PICKER[curStep][answerStep - 1]}
        </Picker>
        <Picker
          onClick={() =>
            debounceClick(getAnswerPosition(REVIEW_PICKER[curStep][answerStep]))
          }
        >
          {REVIEW_PICKER[curStep][answerStep]}
        </Picker>
      </div>
    </SlideBox>
  );
}
