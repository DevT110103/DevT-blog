import axios, { RawAxiosRequestConfig } from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

export const get = async (path: string, options?: RawAxiosRequestConfig<any> | undefined) => {
  const response = await request.get(path, options);
  return response.data;
};

export default request;
