import FullBleed from '@components/common/atom/FullBleed';
import PeerTalk from '@components/common/atom/PeerTalk';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { PEER_GRADE_INFO } from '@constants/list';
import useShowMoreFeedback from '@hooks/store/useShowMoreFeedback';
import { Spacer } from '@nextui-org/react';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import { PeerGrade } from '@type/enums';
import { Fragment } from 'react';

export interface OverallOpinionProps {
  totalEvaluation: {
    count: number;
    peerGrade: PeerGrade;
  }[];
}

export default function OverallOpinion({
  totalEvaluation,
}: OverallOpinionProps) {
  const { visibleItems, fullBleedType, handleShowMore } = useShowMoreFeedback({
    initialVisibleItems: 3,
  });

  const showMoreButton = totalEvaluation.length > 3;

  const evaluation = totalEvaluation.slice(0, visibleItems);

  return (
    <Fragment>
      <HeaderContainer size="md">
        <Typography variant="header03" fontColor="gray08">
          종합 평가
        </Typography>
      </HeaderContainer>
      <ul className="w-full gap-3 flex flex-col px-5">
        {evaluation.map((item, index) => (
          <li key={index}>
            <PeerTalk
              className="px-5"
              count={item.count}
              icon={
                <SvgIcon
                  id={PEER_GRADE_INFO[item.peerGrade].icon}
                  color="primary"
                />
              }
            >
              {PEER_GRADE_INFO[item.peerGrade].text}
            </PeerTalk>
          </li>
        ))}
      </ul>
      {showMoreButton && (
        <FullBleed
          type={fullBleedType}
          onClick={() => handleShowMore(3)}
        ></FullBleed>
      )}
      <Spacer y={6} />
    </Fragment>
  );
}
