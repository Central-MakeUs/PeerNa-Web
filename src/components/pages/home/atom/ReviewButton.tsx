import Typography from '@components/common/atom/Typography';
import IconButton from '@components/common/atom/IconButton';

export default function ReviewButton() {
  /*TODO: 평판 확인 페이지 이동 */
  const handleClick = () => {
    console.log('클릭');
  };
  return (
    <div className="bg-primary100 rounded-xl mt-8 mb-10 w-[524px] mx-auto">
      <button className="w-full flex px-4 py-5 justify-between items-center">
        <p>
          <Typography variant="header03" fontColor="gray08" className="mb-1">
            나는 어떤 동료일까 궁금하다면?
          </Typography>
          <Typography variant="body03" fontColor="gray05" className="text-left">
            동료에게 피어 테스트 응답을 요청해보세요
          </Typography>
        </p>
        <IconButton
          onClick={handleClick}
          iconProps={{
            id: 'IOSChevronRight',
            color: 'gray07',
          }}
        />
      </button>
    </div>
  );
}
