import Typography from '@components/common/atom/Typography';
import HeaderContainer from './HeaderContainer';
import { Button, Tooltip } from '@nextui-org/react';
import SvgIcon from '@components/common/atom/SvgIcon';
import NoKeywordCard from '@components/common/molecule/NoKeywordCard';

const NoKeywordTitles = [
  {
    title: '가치관',
    subtitle: '응답이 모이면 문항 별로 응답된 선택지를 비교해 드릴게요',
  },
  {
    title: '소통 방식',
    subtitle: '응답이 모이면 문항 별로 응답된 선택지를 비교해 드릴게요',
  },
  {
    title: '사고 방식',
    subtitle: '응답이 모이면 문항 별로 응답된 선택지를 비교해 드릴게요',
  },
  {
    title: '결정 방식',
    subtitle: '응답이 모이면 문항 별로 응답된 선택지를 비교해 드릴게요',
  },
];

export default function NoTestKeywordResult() {
  const toolTipContent =
    '셀프 테스트, 피어 테스트 문항의 \n 일치하는 선택지를 확인하세요';

  return (
    <>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-[6px]">
          <Typography variant="header03" fontColor="gray08">
            나도 알고 동료도 아는 내 모습
          </Typography>
          <Tooltip content={toolTipContent}>
            <Button className="bg-transparent !min-w-unit-0 !px-unit-0">
              <SvgIcon id="Help" color="gray04" width={16} height={16} />
            </Button>
          </Tooltip>
        </div>
      </HeaderContainer>
      <section className="flex flex-col gap-3 items-center">
        {NoKeywordTitles.map(({ title, subtitle }) => (
          <NoKeywordCard key={title} title={title} subtitle={subtitle} />
        ))}
      </section>
    </>
  );
}
