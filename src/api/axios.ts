import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface IRequest<T> {
  path: string;
  data?: T;
  method: "GET" | "POST" | "PATCH" | "DELETE";
}
export const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    console.log(error.message);
    return Promise.reject(error);
  }
);

export const ApiRequest = async <RES, REQ>({
  path,
  data,
  method,
}: IRequest<REQ>): Promise<RES | null> => {
  const config: AxiosRequestConfig = {
    url: path,
    method: method,
    data: data,
  };

  try {
    const response: AxiosResponse<RES> = await instance.request(config);
    return response.data;
  } catch (error) {
    return null;
  }
};
