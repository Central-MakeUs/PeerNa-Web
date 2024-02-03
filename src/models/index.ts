export type ApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
};

export type InfiniteApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
  pageRequestDto: {
    totalElements: number;
    currentPageElements: number;
    totalPage: number;
    isFirst: boolean;
    isLast: boolean;
  };
};
