import axios, { AxiosInstance } from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import { BASE_URL } from './constants';

export const createAxios = (): AxiosInstance =>
  axios.create({
    baseURL: BASE_URL,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    adapter: cacheAdapterEnhancer(axios.defaults.adapter!, {
      enabledByDefault: false,
      cacheFlag: 'useCache',
    }),
  });
