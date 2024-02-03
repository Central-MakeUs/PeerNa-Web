import ShakeBox from '@components/animate/ShakeBox';
import SlideBox from '@components/animate/SlideBox';
import TextArea from '@components/common/atom/TextArea';
import Typography from '@components/common/atom/Typography';
import useReviewState from '@hooks/useReviewState';

interface OneLineReviewProps {
  answerStep: number;
}

export default function OneLineReview({ answerStep }: OneLineReviewProps) {
  const { review, handleChangeFeedback } = useReviewState();
  const { feedback } = review;
  const validFeedback = feedback.length < 20;
  return (
    <SlideBox trigger={answerStep}>
      <div className="w-full flex flex-col items-end">
        <ShakeBox trigger={!validFeedback}>
          <TextArea
            fullWidth
            placeholder="가장 잘 표현하는 한 줄을 적어주세요"
            text={feedback}
            handleChangeText={handleChangeFeedback}
          />
        </ShakeBox>
        <div className="flex justify-end">
          <Typography
            variant="body02"
            className={validFeedback ? 'text-gray06' : 'text-danger01'}
          >
            {`${feedback.length}/20`}
          </Typography>
        </div>
      </div>
    </SlideBox>
  );
}
