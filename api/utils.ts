import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import { BASE_URL } from './constants';

export const createAxios = () =>
  axios.create({
    baseURL: BASE_URL,
    adapter: cacheAdapterEnhancer(axios.defaults.adapter!, {
      enabledByDefault: false,
      cacheFlag: 'useCache',
    }),
  });
