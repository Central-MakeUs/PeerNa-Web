import Typography from '@components/common/atom/Typography';
import { Card } from '@nextui-org/card';

export default function UserCard() {
  return (
    <Card
      id="card"
      className="w-[294px] h-[408px] pt-[68px] pb-[32px] px-[58px] items-center gap-[76px]"
      style={{
        backfaceVisibility: 'hidden',
      }}
    >
      <div className="w-[178px] h-[178px] rounded-full bg-slate-500"></div>
      <div className="text-center">
        <Typography variant="body03" fontColor="gray04">
          본투비 리더형
        </Typography>
        <Typography variant="header02" fontColor="gray08">
          성취하는 행동 대장
        </Typography>
      </div>
    </Card>
  );
}
