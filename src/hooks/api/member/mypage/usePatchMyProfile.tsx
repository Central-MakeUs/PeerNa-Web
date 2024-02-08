import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
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

export default function usePatchMyProfile(successCallback?: () => void) {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: editProfileInformation,
    onSuccess: successCallback,
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
