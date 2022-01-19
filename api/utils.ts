import axios, { AxiosRequestConfig } from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

export const createAxios = () =>
  axios.create({
    baseURL: 'https://localhost',
    adapter: cacheAdapterEnhancer(axios.defaults.adapter!, {
      enabledByDefault: false,
      cacheFlag: 'useCache',
    }),
  });
