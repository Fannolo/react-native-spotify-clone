import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { AxiosRequestConfig } from 'axios';

type AxiosBaseQueryFn = BaseQueryFn<AxiosRequestConfig>;

export interface ApiPayload<T, K> {
  queryParams: T;
  requestBody: K;
}

export type { AxiosBaseQueryFn };
