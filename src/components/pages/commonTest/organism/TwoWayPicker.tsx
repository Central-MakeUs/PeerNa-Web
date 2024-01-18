import SlideBox from '@components/animate/SlideBox';
import Picker from '@components/common/atom/Picker';
import { commonTestAnswer } from '@constants/commonTest';
import useCommonTestState from '@hooks/useCommonTestState';
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
  const { commonTest, handleAddAnswers } = useCommonTestState();
  console.log(commonTest.answers);

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

    for (const key in commonTestAnswer) {
      if (Object.prototype.hasOwnProperty.call(commonTestAnswer, key)) {
        const answersArray = commonTestAnswer[key];
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
              getAnswerPosition(commonTestAnswer[curStep][answerStep - 1]),
            );
          }}
        >
          {commonTestAnswer[curStep][answerStep - 1]}
        </Picker>
        <Picker
          onClick={() =>
            debounceClick(
              getAnswerPosition(commonTestAnswer[curStep][answerStep]),
            )
          }
        >
          {commonTestAnswer[curStep][answerStep]}
        </Picker>
      </div>
    </SlideBox>
  );
}
