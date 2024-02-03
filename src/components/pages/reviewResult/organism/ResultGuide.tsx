import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { FontVariantsClassName } from '@constants/styles';
import useHistory from '@hooks/useHistory';
import useModal from '@hooks/useModal';
import { Card, CardBody, Spacer } from '@nextui-org/react';
import { removeAccessToken } from '@utils/token';
import { useEffect } from 'react';

export default function ResultGuide() {
  const { openModal } = useModal();
  const { history, handleChangeHistory } = useHistory();

  useEffect(() => {
    if (history.activity !== 'ReviewResultPage') {
      handleChangeHistory('ReviewResultPage', { type: 'self', step: '3' });
    }
  }, [history]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '결과 확인을 위해\n약관 동의가 필요해요',
          subtitle: '서비스 사용을 위해 약관 동의를 해주세요.',
        }}
      />
      <Spacer y={16} />
      <div className="flex flex-col items-center gap-4">
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon
            id="DocumentTableSearch"
            color="primary"
            width={64}
            height={64}
          />
        </div>
        <Card className="w-full bg-gray01 shadow-none">
          <CardBody className="w-full justify-center gap-3 p-4">
            <Typography variant="body01" fontColor="gray07">
              필수 동의 항목
            </Typography>
            <Typography variant="body05" fontColor="gray04">
              서비스 사용을 위해 약관 동의가 필요합니다. 간편 로그인 시 약관에
              동의하는 것으로 간주되며 약관의 효력이 발생합니다.
            </Typography>
            <div
              className={`${FontVariantsClassName.body05} text-gray04 leading-default 
                            tracking-default
                            break-all
                            whitespace-pre-line`}
            >
              <span className="text-primary">
                이용약관, 개인정보 처리방침, 마케팅 정보 활용 동의 약관에
              </span>{' '}
              동의하시면 간편 로그인 후 결과 확인하기 버튼을 눌러주세요.
            </div>
          </CardBody>
        </Card>
      </div>
      <FixedBottomButton
        handleClick={() => {
          removeAccessToken();
          openModal('login');
        }}
      >
        동의 후 결과 확인하기
      </FixedBottomButton>
    </div>
  );
}
