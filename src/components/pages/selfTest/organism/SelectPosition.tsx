import SelectListItem from '@components/common/atom/selectListItem';
import { positionList } from '@constants/selfTest';
import useSelfTestInformation from '@hooks/useSelfTestInformation';
import { useEffect } from 'react';

export default function SelectPosition() {
  const { selfTest, handleChangePosition } = useSelfTestInformation();

  useEffect(() => {
    handleChangePosition('');
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {positionList.map((position, index) => (
        <SelectListItem
          key={position + index}
          title={position}
          isSelect={selfTest.position === position}
          onClick={() => handleChangePosition(position)}
        />
      ))}
    </div>
  );
}
