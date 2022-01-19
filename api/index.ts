import { createApi } from '@reduxjs/toolkit/query/react';
import { AxiosBaseQueryFn } from './types';
import { createAxios } from './utils';

export const axiosBaseQuery: AxiosBaseQueryFn = async (config) => {
  try {
    const { data } = await createAxios()(config);
    return { data };
  } catch (error) {
    return { error };
  }
};

const api = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
});

export default api;
