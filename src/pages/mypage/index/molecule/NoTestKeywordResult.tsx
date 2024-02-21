import Typography from '@components/common/atom/Typography';
import NoKeywordCard from '@components/common/molecule/NoKeywordCard';
import PeerToolTip from '@pages/mypage/index/atom/PeerToolTip';
import HeaderContainer from './HeaderContainer';

type KeywordProps = {
  type: 'peer' | 'self';
};

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

export default function NoTestKeywordResult({ type }: KeywordProps) {
  const title =
    type === 'self' ? '나도 알고 동료도 아는 내 모습' : '나와 동료의 공통점';

  return (
    <>
      <HeaderContainer size="sm">
        <div className="flex items-center gap-[6px]">
          <Typography variant="header02" fontColor="gray08">
            {title}
          </Typography>
          <PeerToolTip type={type} />
        </div>
      </HeaderContainer>
      <section className="flex flex-col gap-3 items-center px-4">
        {NoKeywordTitles.map(({ title, subtitle }) => (
          <NoKeywordCard key={title} title={title} subtitle={subtitle} />
        ))}
      </section>
    </>
  );
}
