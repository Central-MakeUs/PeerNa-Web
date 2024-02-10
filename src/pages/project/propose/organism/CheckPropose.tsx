import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

interface CheckPropose {
  id: string;
  nextStep: string;
}

export default function CheckPropose({ id, nextStep }: CheckPropose) {
  const { data: projectInformation } = useGetProjectById(Number(id));
  const { push } = useFlow();
  const handleClickNextStep = () =>
    push('ProjectProposePage', { id, step: nextStep });
  return (
    <Fragment>
      <Header>
        <Header.TopBar></Header.TopBar>
        <Header.Body>
          <Header.Title>
            {`${projectInformation.creatorSimpleProfileDto.name}님이\n 프로젝트 참여를 제안했어요`}
          </Header.Title>
        </Header.Body>
      </Header>
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="Shape" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <Footer bottom={3} className="px-4">
        <Button onClick={handleClickNextStep}>자세히 알아보기</Button>
      </Footer>
    </Fragment>
  );
}
