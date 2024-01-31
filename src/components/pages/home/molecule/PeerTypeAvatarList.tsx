import { useFlow } from '@hooks/useStackFlow';
import AvatarButton from '@components/common/atom/AvatarButton';

export default function PeerTypeAvatarList() {
  const { push } = useFlow();

  type PeerType = 'D' | 'I' | 'S' | 'C';

  const handleAvatarClick = (type: PeerType) => {
    push('PeerTypePage', { type });
  };

  return (
    <ul className="w-full px-5 flex gap-5 justify-center">
      <li>
        <AvatarButton type="D" handleClick={() => handleAvatarClick('D')} />
      </li>
      <li>
        <AvatarButton type="I" handleClick={() => handleAvatarClick('I')} />
      </li>
      <li>
        <AvatarButton type="S" handleClick={() => handleAvatarClick('S')} />
      </li>
      <li>
        <AvatarButton type="C" handleClick={() => handleAvatarClick('C')} />
      </li>
    </ul>
  );
}
