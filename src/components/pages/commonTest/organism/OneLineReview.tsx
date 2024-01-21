import ShakeBox from '@components/animate/ShakeBox';
import SlideBox from '@components/animate/SlideBox';
import TextArea from '@components/common/atom/TextArea';
import Typography from '@components/common/atom/Typography';
import useCommonTestState from '@hooks/useCommonTestState';

interface OneLineReviewProps {
  answerStep: number;
}

export default function OneLineReview({ answerStep }: OneLineReviewProps) {
  const { commonTest, handleChangeOneLineReview } = useCommonTestState();
  const { oneLineReview } = commonTest;
  const validOneLineReview = oneLineReview.length < 20;
  return (
    <SlideBox trigger={answerStep}>
      <div className="w-full flex justify-center">
        <div className="w-[350px]">
          <ShakeBox trigger={!validOneLineReview}>
            <TextArea
              fullWidth
              placeholder="동료를 가장 잘 표현하는 한 줄을 적어주세요"
              text={oneLineReview}
              handleChangeText={handleChangeOneLineReview}
            />
          </ShakeBox>
          <div className="flex justify-end">
            <Typography
              variant="body02"
              className={validOneLineReview ? 'text-gray06' : 'text-danger01'}
            >
              {oneLineReview.length}/20
            </Typography>
          </div>
        </div>
      </div>
    </SlideBox>
  );
}
