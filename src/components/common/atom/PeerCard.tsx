import Badge from '@components/common/atom/Badge';
import { PEER_ICON_LIST } from '@constants/images';
import { TEST_TYPE_INFO } from '@constants/list';
import { TestType } from '@type/enums';
import Typography from './Typography';

interface CardProps {
  size: 'M' | 'L';
  type?: 'peer' | 'self';
  testResult: TestType;
}

export default function PeerCard({ size, type, testResult }: CardProps) {
  const cardType = type === 'peer' ? 'primary' : 'default';
  const badgeText = type === 'peer' ? '피어테스트' : '셀프 테스트';
  const peerType = testResult ?? TestType.UNKNOWN;
  const peerBg =
    peerType === 'UNKNOWN'
      ? 'bg-peer-bg bg-no-repeat bg-cover bg-bottom'
      : 'bg-white';
  const cardSize =
    size === 'L'
      ? 'w-[294px] h-[408px] py-7 gap-6'
      : ' w-[171px] h-[238px] py-4 bg-100 gap-2';

  const iconSize = size === 'L' ? 'w-[200px] h-[200px]' : 'w-[110px] h-[110px]';

  return (
    <div
      className={`${cardSize} ${peerBg} rounded-2xl border-1 border-[#E3E6E8] flex flex-col items-center justify-between mb-3`}
    >
      {type && (
        <Badge type={cardType} className="mb-1.5">
          {badgeText}
        </Badge>
      )}
      <img src={PEER_ICON_LIST[peerType]} className={`${iconSize}`} />
      <div className="mt-auto">
        <Typography
          variant="header03"
          fontColor="gray08"
          className="text-center"
        >
          {TEST_TYPE_INFO[peerType]?.title}
        </Typography>
        <Typography
          variant="body03"
          fontColor="gray04"
          className={`text-center ${size === 'L' ? '!whitespace-nowrap mt-2' : ''}`}
        >
          {TEST_TYPE_INFO[peerType]?.description}
        </Typography>
      </div>
    </div>
  );
}
