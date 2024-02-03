import { useMutation } from '@tanstack/react-query';
import { MemberDefaultInformationType } from '@type/index';
import { ApiResponse, http } from 'API';

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
  return await http.patch('/member/mypage/profile', {
    job,
    part,
    oneLiner,
  });
};

export default function usePatchMyProfile(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: editProfileInformation,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
