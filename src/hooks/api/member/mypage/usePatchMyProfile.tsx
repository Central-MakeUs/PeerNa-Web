import { QUERY_KEY } from '@constants/queryKey';
import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MemberDefaultInformationType } from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

type PickMemberDefaultInformationmationType = Pick<
  MemberDefaultInformationType,
  'job' | 'part' | 'oneLiner'
>;

interface EditProfileInformationRequestDTO
  extends PickMemberDefaultInformationmationType {}

interface EditProfileInformationResponseDTO
  extends PickMemberDefaultInformationmationType {}

const editProfileInformation = async ({
  job,
  part,
  oneLiner,
}: EditProfileInformationRequestDTO): Promise<
  ApiResponse<EditProfileInformationResponseDTO>
> => {
  const response = await http.patch('/member/mypage/profile', {
    job,
    part,
    oneLiner,
  });
  return response.data;
};

export default function usePatchMyProfile() {
  const { handleError } = useErrorHandler();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editProfileInformation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MYPAGE_INFO] });
    },
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
