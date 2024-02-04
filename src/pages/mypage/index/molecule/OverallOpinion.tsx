import FullBleed from '@components/common/atom/FullBleed';
import PeerTalk from '@components/common/atom/PeerTalk';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { IconKeyType } from '@constants/icons';
import { PeerGrade } from '@constants/peerTalk';
import useShowMoreFeedback from '@hooks/store/useShowMoreFeedback';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import { Fragment } from 'react';

export interface OverallOpinionProps {
  totalEvaluation: {
    count: number;
    peerGrade: string;
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
      <ul
        className={`w-full flex flex-col px-5 ${showMoreButton ? 'mb-6' : 'mb-[98px]'}`}
      >
        {evaluation.map((item, index) => (
          <li key={index}>
            <PeerTalk
              className="px-5"
              count={item.count}
              icon={
                <SvgIcon
                  id={
                    PeerGrade[item.peerGrade as keyof typeof PeerGrade]
                      .icon as IconKeyType
                  }
                  color="primary"
                />
              }
            >
              {PeerGrade[item.peerGrade as keyof typeof PeerGrade].text}
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
    </Fragment>
  );
}
