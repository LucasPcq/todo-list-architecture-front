export interface IAPIClient {
  get: <ResponseType>(url: string) => Promise<ResponseType>;
  post: <ResponseType>(url: string, postData?: {}) => Promise<ResponseType>;
  patch: <ResponseType>(url: string, patchData?: {}) => Promise<ResponseType>;
  delete: <ResponseType>(url: string) => Promise<ResponseType>;
}

export { axiosClient } from "./axios-client";
