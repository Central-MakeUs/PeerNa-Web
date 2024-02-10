import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import usePostMemberInformation from '@hooks/api/member/index/usePostMemberInfo';
import usePostReviewSelf from '@hooks/api/member/index/usePostReviewSelf';

import { useFlow } from '@hooks/common/useStackFlow';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import useReviewState from '@hooks/store/useReviewState';
import { getAccessToken } from '@utils/token';
import { Fragment, useEffect } from 'react';

export default function LoadingResult() {
  const { push } = useFlow();
  const { review } = useReviewState();
  const { reviewSelf } = useReviewSelfState();
  const { peerGrade, feedback } = review;
  const { name, job, part } = reviewSelf;

  const postMemberMutation = usePostMemberInformation();
  const postReviewSelfMutation = usePostReviewSelf();

  useEffect(() => {
    // 토큰 없으면 그냥 스텝 2로 옮김
    if (getAccessToken() && job !== '' && part !== '') {
      postMemberMutation.mutate(
        {
          name,
          job,
          part,
          selfPeerGrade: peerGrade,
          oneLiner: feedback,
        },
        {
          onSuccess: () => postReviewSelfMutation.mutate(review.answers),
        },
      );
    } else {
      setTimeout(() => {
        push('ReviewResultPage', { type: 'self', step: '2' });
      }, 1000);
    }
  }, []);

  if (postMemberMutation.isSuccess && postReviewSelfMutation.isSuccess) {
    setTimeout(() => {
      push('ReviewResultPage', { type: 'self', step: '3' });
    }, 2500);
  }

  return (
    <Fragment>
      <div className="w-full h-[68px] py-[18px] mt-6 flex items-center justify-between bg-transparent">
        <Typography variant="header01" fontColor="gray07">
          응답 결과를 분석하고 있어요.
        </Typography>
      </div>
      <div className="fixed left-2/4 translate-x-[-50%] top-2/4 translate-y-[-50%]">
        <Spinner size="lg" />
      </div>
    </Fragment>
  );
}
