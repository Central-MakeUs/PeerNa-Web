import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import { UtilityKeys } from '@constants/localStorage';
import { QUERY_KEY } from '@constants/queryKey';
import usePostMemberInformation from '@hooks/api/member/index/usePostMemberInfo';
import usePostReviewSelf from '@hooks/api/member/index/usePostReviewSelf';

import { queryClient } from '@/main';
import { useFlow } from '@hooks/common/useStackFlow';
import useReviewSelfState from '@hooks/store/useReviewSelfState';
import useReviewState from '@hooks/store/useReviewState';
import { getAccessToken } from '@utils/token';
import { Fragment, useEffect, useState } from 'react';

export default function LoadingResult() {
  const { push, replace } = useFlow();
  const { review } = useReviewState();
  const { reviewSelf } = useReviewSelfState();
  const { peerGrade, feedback } = review;
  const { name, job, part } = reviewSelf;

  const postMemberMutation = usePostMemberInformation();
  const postReviewSelfMutation = usePostReviewSelf();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(() => true);
    if (mounted) {
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
            onSuccess: () =>
              postReviewSelfMutation.mutate(review.answers, {
                onSuccess: () => {
                  localStorage.setItem(UtilityKeys.IS_ONBOARD, 'true');
                  queryClient.invalidateQueries({
                    queryKey: [QUERY_KEY.MYPAGE_INFO],
                  });
                  replace('ReviewResultPage', { type: 'self', step: '3' });
                },
              }),
          },
        );
        return;
      } else {
        if (getAccessToken()) {
          setTimeout(() => {
            push('ReviewResultPage', { type: 'self', step: '3' });
          }, 1000);
          return;
        }

        setTimeout(() => {
          push('ReviewResultPage', { type: 'self', step: '3' });
        }, 1000);
      }
    }
    return () => setMounted(() => false);
  }, [mounted]);

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
