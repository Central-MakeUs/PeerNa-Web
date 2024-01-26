export type ApiResponse<T = object> = {
  code: number;
  message: string;
  result: T;
};
