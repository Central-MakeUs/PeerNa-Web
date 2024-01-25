import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import Typography from '@components/common/atom/Typography';
import PeerTalk from '@components/common/atom/PeerTalk';
import FullBleed from '@components/common/atom/FullBleed';
import SvgIcon from '@components/common/atom/SvgIcon';
import { PeerGrade } from '@constants/peerTalk';
import { IconKeyType } from '@constants/icons';
import useShowMoreFeedback from '@hooks/useShowMoreFeedback';

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

  const evaluation = totalEvaluation.slice(0, visibleItems);

  return (
    <>
      <HeaderContainer size="md">
        <Typography variant="header03" fontColor="gray08">
          종합 평가
        </Typography>
      </HeaderContainer>
      <ul className="flex flex-col gap-2 px-5 mb-6">
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
      <FullBleed
        type={fullBleedType}
        onClick={() => handleShowMore(3)}
      ></FullBleed>
    </>
  );
}
