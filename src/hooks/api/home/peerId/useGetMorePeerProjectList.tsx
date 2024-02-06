import { QUERY_KEY } from '@constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ProjectItemType } from '@type/index';
import { InfiniteApiResponse, http } from '@utils/API';

interface MorePeerProjectResponseDTO extends ProjectItemType {}

const getMorePeerProject = async (
  peerId: string,
  page: number,
): Promise<InfiniteApiResponse<MorePeerProjectResponseDTO>> => {
  const response = await http.get(`/home/${peerId}/peer-project?page=${page}`);
  return response.data;
};

export default function useGetMorePeerProject(peerId: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.MORE_PEER_PROJECT, peerId],
    queryFn: ({ pageParam = 1 }) => getMorePeerProject(peerId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.pageRequestDto.isLast ? undefined : nextPage;
    },
  });
}
