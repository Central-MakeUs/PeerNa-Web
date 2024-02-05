import AvatarButton from '@components/common/atom/AvatarButton';
import { useFlow } from '@hooks/common/useStackFlow';
import { TestType } from '@type/enums';

export default function PeerTypeAvatarList() {
  const { push } = useFlow();

  const handleAvatarClick = (type: TestType) => {
    push('PeerTypePage', { type });
  };

  return (
    <ul className="w-full px-5 flex gap-5 justify-center">
      <li>
        <AvatarButton
          type={TestType.D}
          handleClick={() => handleAvatarClick(TestType.D)}
        />
      </li>
      <li>
        <AvatarButton
          type={TestType.I}
          handleClick={() => handleAvatarClick(TestType.I)}
        />
      </li>
      <li>
        <AvatarButton
          type={TestType.S}
          handleClick={() => handleAvatarClick(TestType.S)}
        />
      </li>
      <li>
        <AvatarButton
          type={TestType.C}
          handleClick={() => handleAvatarClick(TestType.C)}
        />
      </li>
    </ul>
  );
}
