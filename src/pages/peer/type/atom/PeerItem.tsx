import Typography from '@components/common/atom/Typography';
import { PEER_ICON_LIST } from '@constants/images';
import { TEST_TYPE_INFO } from '@constants/list';
import { TestType } from '@type/enums';

export default function PeerItem({ type }: { type: TestType }) {
  const { title, description } = TEST_TYPE_INFO[type];
  return (
    <article
      className={`flex flex-col items-center gap-2 w-[236px] mx-auto -mt-9`}
    >
      <img
        src={PEER_ICON_LIST[type]}
        alt={`피어 ${type} 유형`}
        className="w-[100px] h-[100px]"
      />
      <Typography variant="header03" fontColor="gray08">
        {title}
      </Typography>
      <Typography
        variant="body04"
        fontColor="gray06"
        className="!whitespace-nowrap"
      >
        {description}
      </Typography>
    </article>
  );
}
