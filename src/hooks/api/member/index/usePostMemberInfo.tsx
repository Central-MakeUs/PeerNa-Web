import { useMutation } from '@tanstack/react-query';
import {
  MemberDefaultInformationTypeWithSelfGrade,
  MemberDefaultInformationTypeWithUuid,
} from '@type/index';
import { ApiResponse, http } from '@utils/API';

interface MemberInformationRequestDTO
  extends MemberDefaultInformationTypeWithSelfGrade {}

interface MemberbasicInformationResponseDTO
  extends MemberDefaultInformationTypeWithUuid {}

const postMemberInformation = async ({
  name,
  job,
  part,
  selfPeerGrade,
  oneLiner,
}: MemberInformationRequestDTO): Promise<
  ApiResponse<MemberbasicInformationResponseDTO>
> => {
  return await http.post('/member/basic-info', {
    name,
    job,
    part,
    selfPeerGrade,
    oneLiner,
  });
};

export default function usePostMemberInformation(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postMemberInformation,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}
