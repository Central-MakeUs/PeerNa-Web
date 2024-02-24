import Badge from '@components/common/atom/Badge';
import Typography from '@components/common/atom/Typography';
import { PEER_ICON_LIST } from '@constants/images';
import { TEST_TYPE_INFO } from '@constants/list';
import { Spacer } from '@nextui-org/react';
import { TestType } from '@type/enums';

interface CardProps {
  size: 'M' | 'L';
  type?: 'peer' | 'self' | 'analyze';
  testResult: TestType;
}

export default function PeerCard({ size, type, testResult }: CardProps) {
  const cardType = type === 'self' ? 'default' : 'primary';
  const badgeText =
    type === 'peer' ? '피어테스트' : type === 'self' ? '셀프 테스트' : '분석중';
  const peerType = testResult ?? TestType.UNKNOWN;

  const peerBg =
    peerType === TestType.UNKNOWN
      ? '!bg-peer-bg !bg-no-repeat !bg-cover !bg-bottom'
      : 'bg-white';

  const cardSize =
    size === 'L' ? 'w-[294px] py-7 gap-6' : ' w-[171px] py-4 bg-100 gap-3';

  const iconSize = size === 'L' ? 'w-[200px] h-[200px]' : 'w-[110px] h-[110px]';

  const subTitle =
    type === 'analyze'
      ? `동료들의 응답을 \n 수집하고 있어요`
      : TEST_TYPE_INFO[peerType]?.description;

  const title = type === 'analyze' ? false : true;

  return (
    <div
      className={`${cardSize} ${peerBg} rounded-2xl border-1 border-[#E3E6E8] flex flex-col items-center justify-between mb-3`}
    >
      {type ? (
        <Badge type={cardType} className="mb-1.5">
          {badgeText}
        </Badge>
      ) : (
        <Spacer y={3} />
      )}
      <img src={PEER_ICON_LIST[peerType]} className={`${iconSize}`} />
      <div className="mt-auto">
        {title && (
          <Typography
            variant="header03"
            fontColor={type === 'analyze' ? 'gray04' : 'gray08'}
            className="text-center"
          >
            {TEST_TYPE_INFO[peerType]?.title}
          </Typography>
        )}
        <Typography
          variant="body03"
          fontColor="gray04"
          className={`text-center ${size === 'L' ? '!whitespace-nowrap mt-2' : ''}`}
        >
          {subTitle}
        </Typography>
      </div>
    </div>
  );
}
