import axios from "axios";

import { IAPIClient } from "@/shared/adapters";

const handleError = (error: any) => {
  if (!axios.isAxiosError(error)) {
    throw new Error("Unknow Error");
  }

  if (error.response?.status === 404) {
    throw new Error("La ressource demandée n'existe pas.");
  }
};

export const axiosClient = (baseUrl: string): IAPIClient => ({
  get: async <ResponseType>(url: string): Promise<ResponseType> => {
    try {
      const { data } = await axios.get<ResponseType>(`${baseUrl}/${url}`);
      return data;
    } catch (error: any) {
      throw handleError(error);
    }
  },
  post: async <ResponseType>(
    url: string,
    postData?: {}
  ): Promise<ResponseType> => {
    try {
      const { data } = await axios.post<ResponseType>(
        `${baseUrl}/${url}`,
        postData
      );
      return data;
    } catch (error: any) {
      throw handleError(error);
    }
  },
  patch: async <ResponseType>(
    url: string,
    patchData?: {}
  ): Promise<ResponseType> => {
    try {
      const { data } = await axios.patch<ResponseType>(
        `${baseUrl}/${url}`,
        patchData
      );
      return data;
    } catch (error: any) {
      throw handleError(error);
    }
  },
  delete: async <ResponseType>(url: string): Promise<ResponseType> => {
    try {
      const { data } = await axios.delete<ResponseType>(`${baseUrl}/${url}`);
      return data;
    } catch (error: any) {
      throw handleError(error);
    }
  },
});
