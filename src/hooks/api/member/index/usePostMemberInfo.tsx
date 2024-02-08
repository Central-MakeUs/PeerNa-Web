import useErrorHandler from '@hooks/common/useErrorHandler';
import { useMutation } from '@tanstack/react-query';
import {
  MemberDefaultInformationTypeWithSelfGrade,
  MemberDefaultInformationTypeWithUuid,
} from '@type/index';
import { ApiResponse, http } from '@utils/API';
import { AxiosError } from 'axios';

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

export default function usePostMemberInformation() {
  const { handleError } = useErrorHandler();
  return useMutation({
    mutationFn: postMemberInformation,
    onError: (error: AxiosError) => {
      handleError(error);
    },
  });
}
