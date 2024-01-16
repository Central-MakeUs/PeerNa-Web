import TextInput from '@components/common/atom/TextInput';
import Typography from '@components/common/atom/Typography';
import useSelfTestInformation from '@hooks/useSelfTestInformation';
import { motion } from 'framer-motion';

export default function InputName() {
  const { selfTest, isValidName, handleChangeName } = useSelfTestInformation();
  const shakeAnimation = {
    x: [0, -5, 5, -5, 5, 0],
    transition: { type: 'tween', duration: 0.5 },
  };
  return (
    <div className="flex flex-col gap-2">
      <motion.div animate={!isValidName ? shakeAnimation : {}}>
        <TextInput
          text={selfTest.name}
          handleChangeText={handleChangeName}
          placeholder="본명을 입력해주세요"
        />
      </motion.div>
      <div className="flex justify-end">
        <Typography
          variant="body02"
          className={isValidName ? 'text-gray06' : 'text-danger01'}
        >
          {selfTest.name.length}/5
        </Typography>
      </div>
    </div>
  );
}
