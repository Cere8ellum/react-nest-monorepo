export type TResponse<Data> = {
  status: number;
  isError: boolean;
  errorMessage: string;
  data: Data;
};
