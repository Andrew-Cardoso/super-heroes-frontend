import { Params, api } from "./api";

export const useApi = () => {
  // const toast = useToast();

  return {
    get: <T,>(url: string, params?: Params) => api<T>("get", url, params),
  };
};
