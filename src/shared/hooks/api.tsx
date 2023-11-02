import Axios, { Method as AxiosMethod } from "axios";
import { environment } from "../../environment";

const axios = Axios.create({
  baseURL: environment.API_URL,
});

export const api = async <T,>(
  method: Method,
  url: string,
  data?: Params
): Promise<ApiResponse<T>> => {
  try {
    const fullUrl = data ? `${url}${toSearchParams(data)}` : url;
    const response = await axios[method]<T>(fullUrl);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "ALGO DEU ERRADO",
    };
  }
};

function toSearchParams(params: Params) {
  Object.keys(params).forEach((key) => {
    if (
      typeof params[key] === "undefined" ||
      params[key] === null ||
      params[key]?.toString().trim() === ""
    ) {
      delete params[key];
    }
  });

  return "?" + new URLSearchParams(params as Record<string, string>).toString();
}

type Method = Extract<AxiosMethod, "get">;
export type Params = Record<string, string | number>;
type ApiSuccess<T> = {
  success: true;
  data: T;
};
type ApiError = {
  success: false;
  error: string;
};

type ApiResponse<T> = ApiSuccess<T> | ApiError;
